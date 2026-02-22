import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PCM_FORM } from '../../data/pcm.data';
import { Personality } from '../../models/pcm.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private readonly STORAGE_KEY = 'pcm_custom_questions';
  currentQuestionsCount = 0;

  ngOnInit() {
    this.updateCount();
  }

  updateCount() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    this.currentQuestionsCount = saved ? JSON.parse(saved).length : PCM_FORM.length;
  }

  async onUploadQuestions(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const text = await file.text();
    this.parseCSV(text);
  }

  private parseCSV(text: string) {
    try {
      const lines = text.split('\n');
      const dataLines = lines.slice(1).filter(l => l.trim() !== '');

      const newQuestions = dataLines.map(line => {
        const [id, question, anal, empa, pers, rebe, prom, imag] = line.split(';');
        return {
          id: id.trim(),
          question: question.trim(),
          answers: [
            { id: id + '-anal', type: Personality.ANALYSEUR, label: anal.trim(), selected: false },
            { id: id + '-empa', type: Personality.EMPATHIQUE, label: empa.trim(), selected: false },
            { id: id + '-pers', type: Personality.PERSÉVÉRANT, label: pers.trim(), selected: false },
            { id: id + '-rebe', type: Personality.REBELLE, label: rebe.trim(), selected: false },
            { id: id + '-prom', type: Personality.PROMOTEUR, label: prom.trim(), selected: false },
            { id: id + '-imag', type: Personality.IMAGINEUR, label: imag.trim(), selected: false }
          ]
        };
      });

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newQuestions));
      localStorage.removeItem('pcm_quizz_progress'); // On vide le test en cours
      this.updateCount();
      alert(`Bravo ! ${newQuestions.length} questions importées.`);
    } catch (e) {
      alert("Erreur dans le format du CSV.");
    }
  }

  resetDefault() {
    if(confirm("Revenir aux questions PCM par défaut ?")) {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem('pcm_quizz_progress');
      this.updateCount();
    }
  }

  downloadTemplate() {
    const header = "id;question;ANALYSEUR;EMPATHIQUE;PERSÉVÉRANT;REBELLE;PROMOTEUR;IMAGINEUR\n";
    const example = "base1;Ma question ?;Réponse Anal;Réponse Empa;Réponse Pers;Réponse Rebe;Réponse Prom;Réponse Imag";
    const blob = new Blob([header + example], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modele_questions_pcm.csv';
    a.click();
  }
}
