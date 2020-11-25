import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlatformModule} from '@angular/cdk/platform';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ThemeService } from './theme/theme.service';
import { ETheme } from './theme/utils/ETheme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PlatformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(themeService: ThemeService) {
    themeService.setTheme(ETheme.Main);
  }
}