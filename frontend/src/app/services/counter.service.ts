import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = 0;
  constructor() {}

  getCounter() {
    return this.counter;
  }

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }
}
