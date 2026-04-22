import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroT } from '../model/hero.model';

@Component({
  selector: 'app-hero-edit',
  imports: [FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {

  @Input() hero!: HeroT;
  @Output() onHeroEdited = new EventEmitter<HeroT>;

  saveHero() {
    this.onHeroEdited.emit(this.hero);
  }

}
