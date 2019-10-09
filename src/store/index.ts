import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import { UserActions } from './user/types';

export const rootReducer = combineReducers({
  user: userReducer
});

export type AppActions =
  | UserActions;
export type AppState = ReturnType<typeof rootReducer>;
