import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  title = 'easylearn';
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: any) {
    console.log('beforeinstallprompt caught', e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  constructor(
    private updates: SwUpdate,
    private platform: Platform
  ) {
    console.log('platform', this.platform);
    interval(10000).subscribe(() => {
      console.log('interval');
      this.updates.checkForUpdate();
    });

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

  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  ngOnInit(): void {
    // /**
    //  * The beforeinstallprompt event is only triggered in certain browsers. This event simply indicates that everything is in order
    //  * for the user to install the PWA. On mobile Chrome, a message is shown by default to the user, but we can also interfere and
    //  * block it. This way, we can show our own message, and continue the event on our own terms.
    //  * In this case, we store the event, and prevent it from continuing. We then show a regular <div> in the HTML, which contains the
    //  * question to install the PWA, and a button to do so. That button then triggers the prompt, which the user can then accept or deny.
    //  * The result of this prompt is mostly irrelevant to the functionality. Our code has no impact on the proceedings of the installation
    //  * after the user has accepted the prompt.
    //  * A possible usecase for the Promise resolved by the prompt, is for metrics. We can use the result to calculate how many users have
    //  * accepted or denied our prompts.
    //  */
    // window.addEventListener('beforeinstallprompt', (e) => {
    //   // Prevent Chrome 67 and earlier from automatically showing the prompt
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   this.deferredPrompt = e;
    //
    //   console.log('beforeinstallprompt!');
    //   // if askedOnce is true, no need to ask again.
    //   this.showPwaPrompt = !this.askedOnce;
    // });
  }

  // acceptPwaPrompt() {
  //   this.showPwaPrompt = false;
  //   this.askedOnce = true;
  //   this.deferredPrompt.prompt();  // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice.then((choiceResult) => {
  //     if (choiceResult.outcome === 'accepted') {
  //       console.log('User accepted the A2HS prompt');
  //     } else {
  //       console.log('User dismissed the A2HS prompt');
  //     }
  //
  //     this.deferredPrompt = null;
  //   });
  // }
}
