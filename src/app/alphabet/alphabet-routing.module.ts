import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './components/english/english.component';
import { UkraineComponent } from './components/ukraine/ukraine.component';

const routes: Routes = [
  { path: '', redirectTo: 'ukr' },
  { path: 'ukr', component: UkraineComponent },
  { path: 'eng', component: EnglishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule { }
