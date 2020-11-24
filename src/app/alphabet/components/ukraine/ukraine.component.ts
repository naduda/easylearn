import { Component, OnInit } from '@angular/core';
import { UKR_LATTERS } from './letters.map';

@Component({
  selector: 'app-ukraine',
  templateUrl: './ukraine.component.html',
  styleUrls: ['./ukraine.component.sass']
})
export class UkraineComponent implements OnInit {

  letter: string = '';

  private success: Set<number> = new Set();
  private idx: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.success = new Set();
    this.showNextLetter(false);
  }

  showNextLetter(success: boolean) {
    if (success) {
      this.success.add(this.idx);
    }
    if (this.success.size === 32) {
      this.letter = 'end';
      return;
    }

    do {
      this.idx = this.randomInt(0, 32);
      this.letter = UKR_LATTERS.get(this.idx) as string;
    } while (this.success.has(this.idx));

  }

  private randomInt(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
  }

}
