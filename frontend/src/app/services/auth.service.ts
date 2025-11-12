import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseApp: FirebaseApp;
  auth: Auth;
  private token = '';

  constructor() {
    this.firebaseApp = initializeApp({
      apiKey: 'AIzaSyBnNnK6wzhLKZVkU5sOgCyHFXnpO47h--4',
      authDomain: 'sk-ng-nov-25.firebaseapp.com',
    });

    this.auth = getAuth(this.firebaseApp);
  }

  async userRegistration(email: string, password: string) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('SUCCESS', userCredentials);
    } catch (err) {
      console.error(err);
    }
  }

  async userLogin(email: string, password: string) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.token = await userCredentials.user.getIdToken();
      console.log('TOKEN', this.token);
    } catch (err) {
      console.error(err);
    }
  }

  isAuthenticated() {
    return this.token.trim() !== '';
  }

  getToken() {
    return this.token;
  }
}
