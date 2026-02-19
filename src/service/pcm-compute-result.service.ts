import { Injectable } from '@angular/core';
import { Personality } from '../models/pcm.model';
import { PcmAnswer, PcmQuestion, PcmResult, UserAnswers } from '../models/pcm.model';
import { PCM_FORM } from '../data/pcm.data';

@Injectable({
  providedIn: 'root'
})
export class PcmComputeResultService {

  constructor() { }

  /**
   * Calcule le profil complet à partir des réponses de l'utilisateur
   * @param answers Objet contenant les scores (1-6) par ID de réponse
   */
  public calculate(answers: UserAnswers): PcmResult {
    // 1. Initialisation des compteurs avec le typage strict
    const baseScores = this.initScoreMap();
    const phaseScores = this.initScoreMap();
    const globalScores = this.initScoreMap();

    // 2. Ventilation des points selon les blocs (1-10, 11-20, 21-30)
    PCM_FORM.forEach((question: PcmQuestion, index: number) => {
      question.answers.forEach((ans: PcmAnswer) => {
        const points = answers[ans.id] || 0;
        const type = ans.type;

        // Énergie Globale (Toutes les questions)
        globalScores[type] += points;

        // Bloc BASE : 10 premières questions
        if (index < 10) {
          baseScores[type] += points;
        }

        // Bloc PHASE : 10 dernières questions
        if (index >= 20) {
          phaseScores[type] += points;
        }
      });
    });

    // 3. Identification de la Base et de la Phase
    const base = this.getHighestPersonality(baseScores);
    const phase = this.getHighestPersonality(phaseScores);

    // 4. CORRECTION TYPAGE : Calcul des pourcentages d'aisance (Relatifs au maximum)
    // On initialise avec toutes les clés de l'Enum pour satisfaire TS
    const percentages: Record<Personality, number> = this.initScoreMap();

    const maxScore = Math.max(...Object.values(globalScores));

    (Object.keys(globalScores) as Personality[]).forEach(type => {
      // Normalisation : le plus haut score devient 100%, les autres sont relatifs
      percentages[type] = maxScore > 0
        ? Math.round((globalScores[type] / maxScore) * 100)
        : 0;
    });

    // 5. Identification des Phases Vécues
    // Logique : Score > 75% du score de la Base && pas la Base ni la Phase actuelle
    const baseScoreValue = globalScores[base];
    const livedPhases = (Object.keys(globalScores) as Personality[]).filter(type => {
      return type !== base &&
             type !== phase &&
             globalScores[type] > (baseScoreValue * 0.75);
    });

    // 6. Retour du résultat complet
    return {
      base,
      phase,
      livedPhases,
      scores: globalScores as Record<Personality, number>,
      percentages
    };
  }

  // Utilitaires privés
  private initScoreMap(): { [key in Personality]: number } {
    return {
      [Personality.ANALYSEUR]: 0,
      [Personality.EMPATHIQUE]: 0,
      [Personality.PERSÉVÉRANT]: 0,
      [Personality.REBELLE]: 0,
      [Personality.PROMOTEUR]: 0,
      [Personality.IMAGINEUR]: 0
    };
  }

  private getHighestPersonality(map: { [key in Personality]: number }): Personality {
    return Object.entries(map).reduce((a, b) => a[1] > b[1] ? a : b)[0] as Personality;
  }
}
