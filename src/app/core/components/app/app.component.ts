import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as AuthReducer from '../../../auth/reducers';
import * as Auth from '../../../auth/actions/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  constructor(private store: Store<AuthReducer.State>) {
    this.loggedIn$ = this.store.select(AuthReducer.getLoggedIn);
  }

  ngOnInit() {
  }

  onSignOff() {
    this.store.dispatch(new Auth.Logout());
  }
}
