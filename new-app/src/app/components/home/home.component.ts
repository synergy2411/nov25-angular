import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user = {
    firstName: 'Monica',
    lastName: 'Geller',
    isWorking: true,
  };

  x = signal(1);
  y = signal(10);

  z = computed(() => this.x() + this.y());

  username = signal('');

  constructor() {
    // Type-ahead suggestion

    effect((cleanUp) => {
      let username = this.username();
      if (username.trim() !== '') {
        let notifier = setTimeout(() => {
          fetch(`https://api.github.com/users/${username}/repos`)
            .then((resp) => resp.json())
            .then(console.log)
            .catch(console.error);
        }, 1000);
        cleanUp(() => {
          clearTimeout(notifier);
        });
      }
    });
  }

  ngOnInit(): void {}

  increaseX() {
    this.x.update((prev) => prev + 1);
  }

  onChange(value: string) {
    this.username.set(value);
  }
}
