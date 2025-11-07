import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  product = {
    title: 'iPhone 17 Air',
    price: 1999,
    launchDate: new Date('Sept 10, 2025'),
    marketValue: 0.9,
    avgSale: 12345.6789,
    contactNumber: 9876543210,
  };

  promise = new Promise((resolve) => {
    setTimeout(() => resolve('Promise Resolved'), 2000);
  });
}
