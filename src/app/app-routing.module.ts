import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'alphabet', pathMatch: 'full' },
      { path: 'alphabet', loadChildren: () => import('./alphabet/alphabet.module').then(m => m.AlphabetModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
