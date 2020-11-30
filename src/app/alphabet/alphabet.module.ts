import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SvgModule } from '../svg-module/svg-module.module';
import { AlphabetRoutingModule } from './alphabet-routing.module';
import { LettersComponent } from './components/letters/letters.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    LettersComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AlphabetRoutingModule,
    SvgModule,
  ]
})
export class AlphabetModule { }
