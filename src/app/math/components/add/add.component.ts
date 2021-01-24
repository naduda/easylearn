import { Component } from '@angular/core';

interface IEx {
  a: number;
  b: number;
  r?: number;
  expected: number;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent {

  maxValue = 10;
  exCount = 10;
  items: IEx[] = [];

  positive = 0;
  negative = 0;
  end = false;
  best = false;

  constructor() {
    this.start();
  }

  showEx(): void {
    if (this.items.length >= this.exCount) {
      this.checkResults();
      this.end = true;
      return;
    }

    const expected = this.generate(this.maxValue);
    const a = this.generate(expected);
    const ex: IEx = {
      a,
      b: expected - a,
      expected,
    };

    this.items.push(ex);
  }

  private start(): void {
    this.end = false;
    this.best = false;
    this.items = [];
    this.positive = 0;
    this.negative = 0;
    this.showEx();
  }

  private checkResults(): void {
    for (const ex of this.items) {
      if (ex.r === ex.expected) {
        this.positive++;
      } else {
        this.negative++;
      }
    }
    this.best = this.positive === this.exCount;
  }

  private generate(v: number): number {
    return Math.floor(Math.random() * v);
  }
}
