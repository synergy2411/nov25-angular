import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user-model';
import { USER_DATA } from '../../model/mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  user!: IUser;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(person: IUser) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onChange(votes: string) {
    this.user.votes = +votes;
  }
}
