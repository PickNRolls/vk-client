import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import { AuthActions } from './auth/types';

import pageReducer from './page/reducer';
import { PageActions } from './page/types';

import userReducer from './user/reducer';
import { UserActions } from './user/types';

export const rootReducer = combineReducers({
  auth: authReducer,
  page: pageReducer,
  user: userReducer
});

export type AppActions =
  | AuthActions
  | PageActions
  | UserActions;

export type AppState = ReturnType<typeof rootReducer>;
