import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css',
})
export class MainNavigationComponent {
  constructor(private router: Router, public authService: AuthService) {}

  onLogout() {
    this.authService.userLogout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
