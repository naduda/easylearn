import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvgModule } from '../svg-module/svg-module.module';
import { AddComponent } from './components/add/add.component';
import { MainComponent } from './main.component';
import { MathRoutingModule } from './math-routing.module';

@NgModule({
  declarations: [MainComponent, AddComponent],
  imports: [
    CommonModule,
    MathRoutingModule,
    FormsModule,
    HttpClientModule,
    SvgModule,
  ]
})
export class MathModule { }
