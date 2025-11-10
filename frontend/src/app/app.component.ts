import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers : [UserService]
})
export class AppComponent {
  title = 'frontend';
  toggle = false;
}
