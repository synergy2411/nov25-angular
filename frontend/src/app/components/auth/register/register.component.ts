import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  username = new FormControl('', [Validators.required, Validators.email]);

  countries = ['india', 'australia', 'usa', 'singapore'];

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: this.username,
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          RegisterComponent.exclamationMarkValidator,
        ]),
        cnfPassword: new FormControl('', Validators.required),
        hobbies: new FormArray([]),
        country: new FormControl(),
      },
      {
        validators: RegisterComponent.passwordMatchValidator,
      }
    );

    // this.registerForm.patchValue({
    //   username: 'test@test.com',
    //   password: 'test987',
    // });
  }

  // get username() {
  //   return this.registerForm.get('username') as FormControl;
  // }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.registerForm.get('cnfPassword') as FormControl;
  }

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  addNewHobby() {
    this.hobbies.push(
      new FormGroup({
        name: new FormControl(),
        frequency: new FormControl(),
      })
    );
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    const { username, password } = this.registerForm.value;
    // console.log('Username : ', username);
    // console.log('Password : ', password);

    console.log(this.registerForm.value);
    this.authService.userRegistration(username, password);
  }

  // CUSTOM VALIDATOR
  static exclamationMarkValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }

  static passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const cnfPassword = control.get('cnfPassword');

    if (!password || !cnfPassword || password.value === cnfPassword.value) {
      return null;
    }
    return { mismatched: true };
  }

  // Leave Guard
  shouldExit() {
    return confirm('Are you sure to leave this page?');
  }
}
