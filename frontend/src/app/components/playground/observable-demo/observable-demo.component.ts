import { Component } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent {
  unsub$!: Subscription;

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next(101), 1000);
    setTimeout(() => observer.next(102), 2500);
    setTimeout(() => observer.next(103), 4000);
    // setTimeout(() => observer.error(new Error('Something went wrong')), 4500);
    setTimeout(() => observer.complete(), 5000);
  });

  onSubscribe() {
    console.log('Start');
    this.unsub$ = this.obs$.subscribe({
      next: (data) => console.log('DATA : ', data),
      error: (err) => console.error(err),
      complete: () => console.log('[COMPLETED]'),
    });
    console.log('End');
  }

  onUnsubscribe() {
    this.unsub$.unsubscribe();
  }
}
