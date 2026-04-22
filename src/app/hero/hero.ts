import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroT } from '../model/hero.model';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: 'hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() hero!: HeroT;
  @Output() onMissionDone = new EventEmitter<HeroT>;

}



