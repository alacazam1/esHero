import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { CommonModule } from '@angular/common';
import { HeroT } from './model/hero.model';
import { HeroEdit } from "./hero-edit/hero-edit";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Hero, HeroEdit],
  templateUrl: 'app.html',
  styleUrl: 'app.css'
})
export class App {
  protected readonly title = signal('hero');

  heroes: HeroT[] = [
    {
      id: 1, completata: false, nome: "eroe 1", potere: "potere 1"
    },
    {
      id: 2, completata: false, nome: "eroe 2", potere: "potere 2"
    },
    {
      id: 3, completata: false, nome: "eroe 3", potere: "potere 3"
    },
  ];
  totalCompleted = 0;


  heroSelected: HeroT = {} as HeroT;

  markAsDone(hero: HeroT) {
    hero.completata = true;
    this.totalCompleted++;
  }

  savehero(hero: HeroT) {
    // verifico se l'eroe è già presente nella lista
    const index = this.heroes.findIndex(h => h.id === hero.id);
    if (index !== -1) {
      // se è presente, aggiorno l'eroe esistente
      this.heroes[index] = hero;
    } else {  // se non è presente, lo aggiungo alla lista
      this.heroes.push(hero);
    }

    this.heroSelected = {} as HeroT;
  }
}

const heroes: Hero[] = [];