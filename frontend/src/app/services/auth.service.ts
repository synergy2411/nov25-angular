import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseApp: FirebaseApp;
  auth: Auth;

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

  userLogin(email: string, password: string) {}
}
