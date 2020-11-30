import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EN_LETTERS, UKR_LETTERS } from './letters.map';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.sass']
})
export class LettersComponent implements OnDestroy {

  letter = '';
  successButton = 'Yes';
  rejectButton = 'No';

  private success: Set<number> = new Set();
  private idx = 0;
  private m = EN_LETTERS;
  private destroy$ = new Subject<void>();

  constructor(
    route: ActivatedRoute,
    router: Router,
  ) {
    route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const lang = params.id;
        if (lang !== 'uk' && lang !== 'en') {
          router.navigate(['alphabet', 'uk']);
        }
        this.init(lang);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showNextLetter(success: boolean): void {
    if (success) {
      this.success.add(this.idx);
    }
    if (this.success.size === this.m.size) {
      this.letter = 'end';
      return;
    }

    do {
      this.idx = this.randomInt(0, this.m.size);
      this.letter = this.m.get(this.idx) as string;
    } while (this.success.has(this.idx));
  }

  private randomInt(min: number, max: number): number {
    return min + Math.floor((max - min) * Math.random());
  }

  private init(lang: string): void {
    this.m = lang === 'uk' ? UKR_LETTERS : EN_LETTERS;
    this.successButton = lang === 'uk' ? 'Так' : 'Yes';
    this.rejectButton = lang === 'uk' ? 'Ні' : 'No';
    this.success = new Set();
    this.showNextLetter(false);
  }

}
