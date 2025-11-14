import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../model/user-model';
import { UserService } from '../../services/user.service';
import { interval, Subscription } from 'rxjs';
// import { USER_DATA } from '../../model/mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, OnDestroy {
  users!: IUser[];

  unsubUserData!: Subscription;

  interval$ = interval(1000);
  unsubInterval$!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    // this.users = this.userService.getUserdata();
    this.unsubUserData = this.userService
      .getUserdata()
      .subscribe((allUsers) => (this.users = allUsers));

    this.unsubInterval$ = this.interval$.subscribe(console.log);
  }

  onMoreInfo(person: IUser) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onChange(votes: string) {
    // this.user.votes = +votes;
  }

  ngOnDestroy(): void {
    this.unsubUserData.unsubscribe();
    this.unsubInterval$.unsubscribe();
  }
}
