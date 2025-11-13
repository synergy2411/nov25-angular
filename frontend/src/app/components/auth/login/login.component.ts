import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    this.authService
      .userLogin(loginForm.value.email, loginForm.value.password)
      .then(() => {
        // Programmtic Navigate the user
        this.router.navigateByUrl('/users');
      });
  }
}
