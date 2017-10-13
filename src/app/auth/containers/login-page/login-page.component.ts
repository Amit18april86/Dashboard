import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';
import {Authenticate} from '../../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loggedIn$: Observable<boolean>;
  pending$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromAuth.State>) {
    this.loggedIn$ = this.store.select(fromAuth.getLoggedIn);
    this.pending$ = this.store.select(fromAuth.getPending);
    this.errorMessage$ = this.store.select(fromAuth.getError);
  }

  onLogin($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }

  onLoginReset() {
    this.store.dispatch(new Auth.LoginReset());
  }
}
