import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getSimpleData() {
    return 'Hello World!';
  }

  getPromiseData() {
    return new Promise((resolve) => {
      resolve('Promise data');
    });
  }

  getObservableData() {
    return of('Observable data');
  }
}
