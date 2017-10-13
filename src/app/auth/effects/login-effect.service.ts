import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as Auth from '../actions/auth';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { of } from 'rxjs/observable/of';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginEffectService {
  constructor(private actions$: Actions, private loginService: LoginService,
              private router: Router) {}
  @Effect()
  login$ = this.actions$.ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth => this.loginService.login(auth)
      .map(user => {
        return new Auth.LoginSuccess({user});
      }))
    .catch(error => of(new Auth.LoginFailure(error)));

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.ofType(Auth.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/dashboard']));
}
