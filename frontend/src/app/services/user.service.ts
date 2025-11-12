import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mock';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser } from '../model/user-model';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class UserService {
  private baseURL =
    'https://sk-ng-nov-25-default-rtdb.firebaseio.com/users.json';

  constructor(private authService: AuthService, private http: HttpClient) {}

  getUserdata() {
    // return USER_DATA;
    return this.http.get<IUser[]>(this.baseURL);
  }
}

// AoT (Ahead-of-Time) Compiler
// Tree-shaking : removes unused code from final build
// Reduced build size
// Loads faster on the UI
