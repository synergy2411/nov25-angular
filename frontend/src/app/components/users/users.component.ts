import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft Inc',
    dob: new Date('Dec 12, 1965'),
    income: 50000,
    isWorking: true,
    avatar: './assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(userLastName: string, userCompany: string) {
    alert(`Mr. ${userLastName.toUpperCase()} is working with ${userCompany}!`);
  }

  onChange(votes: string) {
    this.user.votes = +votes;
  }
}
