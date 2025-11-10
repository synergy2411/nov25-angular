import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    // this.registerForm.patchValue({
    //   username: 'test@test.com',
    //   password: 'test987',
    // });
  }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  onSubmit() {
    const { username, password } = this.registerForm.value;
    console.log('USername : ', username);
    console.log('Password : ', password);
  }
}
