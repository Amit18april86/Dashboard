import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Authenticate } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Input() errorMsg: any;
  @Output() authenticate = new EventEmitter<Authenticate>();
  @Output() resetLoginForm = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  login() {
    if (this.form.valid) {
      this.authenticate.emit(this.form.value);
    }
  }

  resetForm() {
    this.form.reset();
    this.resetLoginForm.emit();
  }
}
