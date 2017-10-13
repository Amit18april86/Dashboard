import * as fromRouter from '@ngrx/router-store';

export interface State {
  routeReducer: fromRouter.RouterReducerState;
}

export const reducers = {
  routerReducer: fromRouter.routerReducer
};
