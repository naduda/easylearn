import { Component } from '@angular/core';

interface IEx {
  a: number;
  b: number;
  r?: number;
  expected: number;
  pos?: boolean;
  neg?: boolean;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent {

  maxValue = 10;
  exCount = 3;
  items: IEx[] = [];

  positive = 0;
  negative = 0;
  end = false;
  best = false;

  constructor() {
    this.start();
  }

  showEx(): void {
    if (this.end) {
      this.start();
      return;
    }
    if (this.items.length === this.exCount) {
      this.checkResults();
      this.end = true;
      return;
    }

    const expected = this.generate(this.maxValue);
    if (expected < 1) {
      this.showEx();
      return;
    }
    const a = this.generate(expected);
    const ex: IEx = {
      a,
      b: expected - a,
      expected,
    };

    if (this.itemsContains(ex)) {
      this.showEx();
      return;
    }

    this.items.push(ex);
  }

  checkMaxEx(): void {
    if (this.exCount > 20) {
      setTimeout(() => this.exCount = 20, 0);
    }
  }

  private itemsContains(v: IEx): boolean {
    for (const it of this.items) {
      if (it.a === v.a && it.b === v.b) {
        return true;
      }
    }
    return false;
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
        ex.pos = true;
        this.positive++;
      } else {
        ex.neg = true;
        this.negative++;
      }
    }
    this.best = this.positive === this.exCount;
  }

  private generate(v: number): number {
    return Math.floor(Math.random() * v);
  }

}
