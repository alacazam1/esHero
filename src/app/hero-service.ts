import { Injectable, signal } from '@angular/core';
import { HeroT } from './model/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

heroList = signal<HeroT[]>([

  {
    id: 1,
    nome: 'Superman',
    potere: 'Super forza, volo, invulnerabilità, vista calorifica, super udito, super alito',
    completata: false,  
  },  
  {
    id: 2,
    nome: 'Batman', 
    potere: 'Intelligenza, abilità marziali, ricchezza, tecnologia avanzata',
    completata: false,  
  }
]);

  heroListService() {
    return this.heroList();
  }

  markAsDone(hero: HeroT) {
    const updatedHeroes = this.heroList().map(h => h.id === hero.id ? { ...h, completata: true } : h);
    this.heroList.set(updatedHeroes);
  }

  addHero(hero: HeroT) {
    const updatedHeroes = [...this.heroList(), hero];
    this.heroList.set(updatedHeroes);
  }

  updateHero(hero: HeroT) {
    const updatedHeroes = this.heroList().map(h => h.id === hero.id ? hero : h);
    this.heroList.set(updatedHeroes);
  }
}
  
  

