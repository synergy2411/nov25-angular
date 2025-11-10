import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
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
        RegisterComponent.exclamationMarkValidator,
      ]),
      cnfPassword: new FormControl(''),
    });

    // this.registerForm.patchValue({
    //   username: 'test@test.com',
    //   password: 'test987',
    // });
  }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.registerForm.get('cnfPAssword') as FormControl;
  }

  onSubmit() {
    const { username, password } = this.registerForm.value;
    console.log('USername : ', username);
    console.log('Password : ', password);
  }

  // CUSTOM VALIDATOR
  static exclamationMarkValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }
}
