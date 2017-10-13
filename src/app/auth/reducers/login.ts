import * as fromAuth from '../actions/auth';

export interface State {
  error: any | null ;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export function reducer (state= initialState, action: fromAuth.Actions) {
  switch (action.type) {
    case fromAuth.LOGIN: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }
    case fromAuth.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false
      };
    }
    case fromAuth.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }
    case fromAuth.LOGIN_RESET: {
      return initialState;
    }
    default: return state;
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
