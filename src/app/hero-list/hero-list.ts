import { Component } from '@angular/core';
import { HeroService } from '../hero-service';
import { Hero } from '../hero/hero';
import { HeroT } from '../model/hero.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-list',
  imports: [Hero, CommonModule],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  constructor (private heroService: HeroService) {}

  totalCompleted = 0;
  heroSelected: HeroT = {} as HeroT;

  getHeros() {
    return this.heroService.heroList();
  }

  heroList() {
    return this.heroService.heroListService();
  }

  markAsDone(hero: HeroT) {
    this.heroService.markAsDone(hero);

    console.log(this.heroService.heroList());
  }
}
