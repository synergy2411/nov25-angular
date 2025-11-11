import { Component } from '@angular/core';

import {
  Observable,
  Subscription,
  interval,
  from,
  map,
  filter,
  tap,
  take,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

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

  // Interval Operator
  interval$ = interval(1000);
  unsubInterval!: Subscription;

  onInterval() {
    this.unsubInterval = this.interval$
      .pipe(
        tap((val) => console.log('[TAP]', val)),
        filter((val) => val % 2 == 0),
        map((val) => val * 2),
        take(5)
      )
      .subscribe((value) => console.log(value));
  }

  onUnsubInterval() {
    this.unsubInterval.unsubscribe();
  }

  // From Operator
  friends = ['Monica', 'Ross', 'Rachel', 'Joey'];
  from$ = from(this.friends);

  onFromSubscribe() {
    this.from$
      .pipe(
        filter((friend) => friend.startsWith('R')),
        map((value) => 'One of Best friend : ' + value)
      )
      .subscribe(console.log); // Method Referencing
  }

  // Subject

  onSubject() {
    // const subject = new Subject();
    // const subject = new BehaviorSubject(100);
    // const subject = new ReplaySubject(1);
    const subject = new AsyncSubject();

    subject.subscribe((value) => console.log('Subs 1: ', value));
    subject.next(101);
    subject.next(102);
    subject.next(103);

    subject.subscribe((value) => console.log('Subs 2: ', value));
    subject.next(104);
    subject.next(105);

    subject.complete();
  }
}
