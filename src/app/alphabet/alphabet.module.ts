import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphabetRoutingModule } from './alphabet-routing.module';
import { MainComponent } from './main.component';
import { UkraineComponent } from './components/ukraine/ukraine.component';
import { EnglishComponent } from './components/english/english.component';


@NgModule({
  declarations: [MainComponent, UkraineComponent, EnglishComponent],
  imports: [
    CommonModule,
    AlphabetRoutingModule
  ]
})
export class AlphabetModule { }
