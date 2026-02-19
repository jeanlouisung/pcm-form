import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personality } from '../../models/pcm.model';
import { PcmResult } from '../../models/pcm.model';

@Component({
  selector: 'app-results-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-display.component.html',
  styleUrl: './results-display.component.scss'
})
export class ResultsDisplayComponent {
    @Input() data!: PcmResult;

    // Configuration pour l'affichage (labels et couleurs)
    personalityConfig = {
      [Personality.ANALYSEUR]: { label: 'Analyseur', color: '#00AEEF', text: 'Logique, organisé, structuré' },
      [Personality.EMPATHIQUE]: { label: 'Empathique', color: '#F7941E', text: 'Chaleureux, sensible, compatissant' },
      [Personality.PERSÉVÉRANT]: { label: 'Persévérant', color: '#92278F', text: 'Observateur, consciencieux, dévoué' },
      [Personality.REBELLE]: { label: 'Rebelle', color: '#FFF200', text: 'Spontané, créatif, ludique' },
      [Personality.PROMOTEUR]: { label: 'Promoteur', color: '#ED1C24', text: 'Adaptable, charmeur, fonceur' },
      [Personality.IMAGINEUR]: { label: 'Imagineur', color: '#8B5E3C', text: 'Calme, imaginatif, réfléchi' }
    };

    // On trie les personnalités pour l'affichage de l'immeuble (ex: par score)
    get sortedPersonalities() {
      return Object.entries(this.data.percentages)
        .map(([type, value]) => ({ type: type as Personality, value }))
        .sort((a, b) => b.value - a.value); // Les plus forts en haut pour l'impact visuel
    }

    getLabel(type: Personality): string {
      return this.personalityConfig[type].label;
    }

    getColor(type: Personality): string {
      return this.personalityConfig[type].color;
    }

    getDescription(type: Personality): string {
      return this.personalityConfig[type].text;
    }
}
