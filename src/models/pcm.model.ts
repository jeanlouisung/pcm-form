export enum Personality {
  ANALYSEUR = 'ANALYSEUR',
  EMPATHIQUE = 'EMPATHIQUE',
  PERSÉVÉRANT = 'PERSÉVÉRANT',
  REBELLE = 'REBELLE',
  PROMOTEUR = 'PROMOTEUR',
  IMAGINEUR = 'IMAGINEUR'
}

export interface PcmAnswer {
  id: string;
  label: string;
  type: Personality;
}

export interface PcmQuestion {
  id: string;
  question: string;
  answers: PcmAnswer[];
}

export interface PcmResult {
  base: Personality;
  phase: Personality;
  livedPhases: Personality[];
  scores: Record<Personality, number>;
  percentages: Record<Personality, number>; // // Normalisés à 100% par rapport au max
}

// Structure des réponses attendue par le service : { 'base1-anal': 6, 'base1-empa': 5, ... }
export interface UserAnswers {
  [answerId: string]: number;
}
