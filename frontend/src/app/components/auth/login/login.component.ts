import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(
    private cdRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router
  ) {
    // this.cdRef.detach()
    // this.cdRef.reattach()
    // this.cdRef.markForCheck()
  }

  onSubmit(loginForm: NgForm) {
    debugger;
    this.authService
      .userLogin(loginForm.value.email, loginForm.value.password)
      .then(() => {
        // Programmtic Navigate the user
        this.router.navigateByUrl('/users');
      });
  }
}
