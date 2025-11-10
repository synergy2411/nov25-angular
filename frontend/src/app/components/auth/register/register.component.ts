import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    const { username, password } = this.registerForm.value;
    console.log('USername : ', username);
    console.log('Password : ', password);
  }
}
