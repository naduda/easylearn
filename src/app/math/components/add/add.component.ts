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
  gcount = 0;
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
    const n = Date.now().toString();
    const r = this.gcount % 2 === 0 ? +n.substring(n.length - 1) : +n.substring(n.length - 2, n.length - 1);
    if (r > 0 && r <= v) {
      this.gcount++;
      return r;
    }

    const ms = +n.substring(n.length - 2);
    this.sleep(ms);
    return this.generate(v);
  }

  private sleep(miliseconds: number) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }
}
