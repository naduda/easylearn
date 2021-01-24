import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'math', pathMatch: 'full' },
      { path: 'alphabet', loadChildren: () => import('./alphabet/alphabet.module').then(m => m.AlphabetModule) },
      { path: 'math', loadChildren: () => import('./math/math.module').then(m => m.MathModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
