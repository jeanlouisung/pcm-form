import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  DragDropModule
} from '@angular/cdk/drag-drop';
import { PCM_FORM } from '../../data/pcm.data';
import { PcmAnswer, PcmResult } from '../../models/pcm.model';
import { PcmComputeResultService } from '../../service/pcm-compute-result.service';
import { ResultsDisplayComponent } from '../results-display/results-display.component';


interface QuizzAnswer extends PcmAnswer {
  selected: boolean;
}

interface QuizzQuestion {
  id: string;
  question: string;
  answers: QuizzAnswer[];
}

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule, DragDropModule, ResultsDisplayComponent],
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {
  private readonly STORAGE_KEY = 'pcm_quizz_progress';
  questions: QuizzQuestion[] = [];
  results: PcmResult | null = null;

  constructor(private calculator: PcmComputeResultService) {}

  ngOnInit(): void {
    const savedProgress = this.loadFromLocalStorage();

    if (savedProgress) {
      this.questions = savedProgress;
    } else {
      this.initQuizz();
    }
  }

  private initQuizz(): void {
    this.questions = PCM_FORM.map(q => ({
      ...q,
      answers: [...q.answers]
        .sort(() => Math.random() - 0.5)
        .map(a => ({ ...a, selected: false }))
    }));
  }

  get progress(): number {
    if (this.questions.length === 0) return 0;
    const completed = this.questions.filter(q => q.answers.some(a => a.selected)).length;
    return Math.round((completed / this.questions.length) * 100);
  }

  onDrop(event: CdkDragDrop<QuizzAnswer[]>, questionIndex: number) {
    moveItemInArray(this.questions[questionIndex].answers, event.previousIndex, event.currentIndex);
    this.saveToLocalStorage();
  }

  selectAndPromote(questionIndex: number, answerIndex: number) {
    const answer = this.questions[questionIndex].answers[answerIndex];
    answer.selected = true;
    moveItemInArray(this.questions[questionIndex].answers, answerIndex, 0);
    this.saveToLocalStorage();
  }

  toggleSelection(questionIndex: number, answerIndex: number, event: Event) {
    event.stopPropagation();
    this.questions[questionIndex].answers[answerIndex].selected =
      !this.questions[questionIndex].answers[answerIndex].selected;
    this.saveToLocalStorage();
  }

  submitQuizz() {
    const finalAnswers: { [key: string]: number } = {};
    this.questions.forEach(q => {
      q.answers.forEach((ans, index) => {
        finalAnswers[ans.id] = ans.selected ? (6 - index) : 0;
      });
    });
    this.results = this.calculator.calculate(finalAnswers);

    // Une fois terminé, on peut vider le storage ou le garder.
    // Généralement on le vide pour permettre un nouveau test propre.
    localStorage.removeItem(this.STORAGE_KEY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.results = null;
    this.initQuizz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- LOGIQUE DE SAUVEGARDE ---

  private saveToLocalStorage(): void {
    try {
      const data = JSON.stringify(this.questions);
      localStorage.setItem(this.STORAGE_KEY, data);
    } catch (e) {
      console.error('Erreur lors de la sauvegarde du quizz', e);
    }
  }

  private loadFromLocalStorage(): QuizzQuestion[] | null {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Erreur lors du chargement du quizz', e);
      return null;
    }
  }
}
