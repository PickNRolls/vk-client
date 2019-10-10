import { combineReducers } from 'redux';

import pageReducer from './page/reducer';
import { PageActions } from './page/types';

import userReducer from './user/reducer';
import { UserActions } from './user/types';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer
});

export type AppActions =
  | PageActions
  | UserActions;

export type AppState = ReturnType<typeof rootReducer>;
