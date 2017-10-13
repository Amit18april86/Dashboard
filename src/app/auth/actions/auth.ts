import {Action} from "@ngrx/store";
import {Authenticate, User} from "../models/user";

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_RESET = '[Auth] Login Reset';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: Authenticate) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: {user: User}) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class LoginReset implements Action {
  readonly type = LOGIN_RESET;
}

export type Actions = Login | Logout | LoginSuccess | LoginFailure | LoginReset;
