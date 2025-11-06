import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../../model/user-model';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrl: './user-img.component.css',
})
export class UserImgComponent {
  @Input() user!: IUser;

  @Output() childEvent = new EventEmitter<IUser>();

  onClick() {
    this.childEvent.emit(this.user);
  }
}
