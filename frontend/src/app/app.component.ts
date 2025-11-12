import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers : [UserService]
})
export class AppComponent {
  title = 'frontend';
  toggle = false;

  constructor(public authService: AuthService) {}
}
