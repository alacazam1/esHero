import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroT } from '../model/hero.model';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-hero-edit',
  imports: [FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  constructor (private heroService: HeroService) {}

  nuovoHero: HeroT = {} as HeroT;
  

  savehero(hero: HeroT) {
    // verifico se l'eroe è già presente nella lista
    const index = this.heroService.heroList().findIndex(h => h.id === hero.id);
    if (index !== -1) {
      // se è presente, aggiorno l'eroe esistente
      this.heroService.updateHero(hero);
    } else {  // se non è presente, lo aggiungo alla lista
      this.heroService.addHero(hero);
    }

  }

}
