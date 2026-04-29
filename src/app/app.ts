import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { CommonModule } from '@angular/common';
import { HeroT } from './model/hero.model';
import { HeroEdit } from "./hero-edit/hero-edit";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeroService } from './hero-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet,Hero],
  templateUrl: 'app.html',
  styleUrl: 'app.css'
})
export class App {


}

const heroes: Hero[] = [];