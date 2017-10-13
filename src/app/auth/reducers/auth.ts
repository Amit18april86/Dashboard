import {User} from '../models/user';
import * as fromAuth from '../actions/auth';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

const initialState: State = {
  loggedIn: false,
  user: null
};

export function reducer(state= initialState, action: fromAuth.Actions) {
  switch (action.type) {
    case fromAuth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }
    case fromAuth.LOGOUT: {
      return initialState;
    }
    default: return state;
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
