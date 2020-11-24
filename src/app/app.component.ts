import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'easylearn';

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe((event) => {
      console.log(event);
      this.updates
        .activateUpdate()
        .then(() => document.location.reload());
    });

    this.updates.activated.subscribe((ev) => {
      console.log('Previous version: ', ev.previous);
      console.log('Current version: ', ev.current);
    });
  }
}
