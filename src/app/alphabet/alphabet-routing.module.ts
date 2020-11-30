import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettersComponent } from './components/letters/letters.component';

const routes: Routes = [
  { path: '', redirectTo: 'uk' },
  { path: ':id', component: LettersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule { }
