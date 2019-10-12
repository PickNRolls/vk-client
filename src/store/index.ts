import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import authReducer from './auth/reducer';
import { AuthActions } from './auth/types';

import signUpProgressReducer from './signUpProgress/reducer';
import { SignUpProgressActions } from './signUpProgress/types';

import userReducer from './user/reducer';
import { UserActions } from './user/types';

export const createRootReducer = (history: History) => {
  const rootReducer = combineReducers({
    auth: authReducer,
    signUpProgress: signUpProgressReducer,
    router: connectRouter(history),
    user: userReducer
  });

  return rootReducer;
};

export type AppActions =
  | AuthActions
  | SignUpProgressActions
  | UserActions;

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
