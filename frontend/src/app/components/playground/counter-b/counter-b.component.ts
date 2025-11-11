import { Component, Host, Optional, Self } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-counter-b',
  templateUrl: './counter-b.component.html',
  styleUrl: './counter-b.component.css',
  // providers: [CounterService],
})
export class CounterBComponent {
  constructor(@Optional() public counterService: CounterService) {}
}
