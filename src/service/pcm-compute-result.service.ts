import { Injectable } from '@angular/core';
import { PCM_FORM } from '../data/pcm.data';
import { Personality } from '../models/pcm.model';
import { PcmAnswer, PcmQuestion, PcmResult, UserAnswers } from '../models/pcm.model';

@Injectable({
  providedIn: 'root'
})
export class PcmComputeResultService {

  public calculate(answers: UserAnswers): PcmResult {
    const baseScores = this.initScoreMap();
    const phaseScores = this.initScoreMap();
    const globalScores = this.initScoreMap();

    // 1. Calcul des scores bruts
    PCM_FORM.forEach((question: PcmQuestion, index: number) => {
      question.answers.forEach((ans: PcmAnswer) => {
        const points = answers[ans.id] || 0;
        globalScores[ans.type] += points;
        if (index < 10) baseScores[ans.type] += points;
        if (index >= 20) phaseScores[ans.type] += points;
      });
    });

    // 2. Déterminer l'ordre de l'immeuble (le Condo)
    // En PCM, l'ordre est défini par les scores globaux décroissants
    const condoOrder = (Object.keys(globalScores) as Personality[])
      .sort((a, b) => globalScores[b] - globalScores[a]);

    const base = condoOrder[0]; // La Base est toujours le score le plus haut au départ
    const phase = this.getHighestPersonality(phaseScores);

    // 3. Appliquer la règle des "Étages vécus" à 100%
    const percentages: Record<Personality, number> = this.initScoreMap();
    const maxPossibleScore = Math.max(...Object.values(globalScores));

    // Trouver l'index de la phase actuelle dans l'immeuble
    const phaseIndex = condoOrder.indexOf(phase);

    condoOrder.forEach((type, index) => {
      if (index <= phaseIndex) {
        // La Base, la Phase et tout ce qui est entre les deux = 100%
        percentages[type] = 100;
      } else {
        // Les étages au-dessus de la phase gardent leur score relatif
        percentages[type] = Math.round((globalScores[type] / maxPossibleScore) * 100);
      }
    });

    // 4. Identifier les phases vécues pour l'affichage (tout ce qui est sous la phase et n'est pas la base)
    const livedPhases = condoOrder.slice(1, phaseIndex);

    return {
      base,
      phase,
      livedPhases,
      scores: globalScores,
      percentages
    };
  }

  private initScoreMap(): Record<Personality, number> {
    return {
      [Personality.ANALYSEUR]: 0, [Personality.EMPATHIQUE]: 0,
      [Personality.PERSÉVÉRANT]: 0, [Personality.REBELLE]: 0,
      [Personality.PROMOTEUR]: 0, [Personality.IMAGINEUR]: 0
    };
  }

  private getHighestPersonality(map: Record<Personality, number>): Personality {
    return Object.entries(map).reduce((a, b) => (a[1] > b[1] ? a : b))[0] as Personality;
  }
}
