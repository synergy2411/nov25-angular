import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mock';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class UserService {
  constructor() {}

  getUserdata() {
    return USER_DATA;
  }
}

// AoT (Ahead-of-Time) Compiler
// Tree-shaking : removes unused code from final build
// Reduced build size
// Loads faster on the UI
