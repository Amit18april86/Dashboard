import * as fromAuth from '../reducers/auth';
import * as fromLogin from '../reducers/login';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface AuthState {
  auth: fromAuth.State;
  login: fromLogin.State;
}

export interface State {
  auth: AuthState;
}

export const reducers = {
  auth: fromAuth.reducer,
  login: fromLogin.reducer
};


export const authStateFeatureSelector =
  createFeatureSelector<AuthState>('auth');

export const authSelector =
  createSelector(authStateFeatureSelector, (state: AuthState) => state.auth);

export const getLoggedIn =
  createSelector(authSelector, fromAuth.getLoggedIn);
export const getUser =
  createSelector(authSelector, fromAuth.getUser);

export const loginSelector =
  createSelector(authStateFeatureSelector, (state: AuthState) => state.login);
export const getError =
  createSelector(loginSelector, fromLogin.getError);
export const getPending =
  createSelector(loginSelector, fromLogin.getPending);
