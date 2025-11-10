import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user-model';
import { UserService } from '../../services/user.service';
// import { USER_DATA } from '../../model/mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users!: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.users = this.userService.getUserdata();
  }

  onMoreInfo(person: IUser) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onChange(votes: string) {
    // this.user.votes = +votes;
  }
}
