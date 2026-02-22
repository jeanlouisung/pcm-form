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
    const customQuestions = localStorage.getItem('pcm_custom_questions');
    const savedProgress = localStorage.getItem('pcm_quizz_progress');

    if (savedProgress) {
      this.questions = JSON.parse(savedProgress);
    } else {
      // Si des questions custom existent, on les prend, sinon le PCM_FORM
      const source = customQuestions ? JSON.parse(customQuestions) : PCM_FORM;

      this.questions = source.map((q: any) => ({
        ...q,
        answers: [...q.answers]
          .sort(() => Math.random() - 0.5) // Toujours mélanger pour l'utilisateur
          .map((a: any) => ({ ...a, selected: false }))
      }));
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

  /**
   * Action lorsqu'on clique sur la ligne entière (Promotion)
   */
  selectAndPromote(questionIndex: number, answerIndex: number) {
    const question = this.questions[questionIndex];
    const answer = question.answers[answerIndex];

    // Si elle n'est pas sélectionnée, on l'active
    answer.selected = true;

    // On la propulse tout en haut (index 0)
    if (answerIndex > 0) {
      moveItemInArray(question.answers, answerIndex, 0);
    }

    this.saveToLocalStorage();
  }

  /**
   * Action spécifique sur le bouton Ajouter/Retirer
   */
  toggleSelection(questionIndex: number, answerIndex: number, event: Event) {
    event.stopPropagation(); // Empêche de déclencher selectAndPromote en double

    const question = this.questions[questionIndex];
    const answer = question.answers[answerIndex];

    // On inverse l'état
    answer.selected = !answer.selected;

    if (answer.selected) {
      // AJOUTER : On met tout en haut
      moveItemInArray(question.answers, answerIndex, 0);
    } else {
      // RETIRER : On met tout en bas
      // (index = longueur du tableau - 1)
      moveItemInArray(question.answers, answerIndex, question.answers.length - 1);
    }

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
