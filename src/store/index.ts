import { combineReducers } from 'redux';
import { connectRouter, RouterAction } from 'connected-react-router';
import { History } from 'history';

import authReducer from './auth/reducer';
import { AuthActions } from './auth/types';

import signUpProgressReducer from './signUpProgress/reducer';
import { SignUpProgressActions } from './signUpProgress/types';

import userReducer from './user/reducer';
import { UserActions } from './user/types';

import titleReducer from './document/title/reducer';
import { TitleActions } from './document/title/types';

export const createRootReducer = (history: History) => {
  const rootReducer = combineReducers({
    document: combineReducers({
      title: titleReducer
    }),
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
  | UserActions
  | TitleActions
  | RouterAction;

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
