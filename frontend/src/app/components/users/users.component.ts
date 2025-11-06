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
    prop: 'some value',
  };

  onMoreInfo(person: any) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onChange(votes: string) {
    this.user.votes = +votes;
  }
}
