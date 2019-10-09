import {
  UserActions,
  REQUEST_USER_SUCCESS
} from './types';
import { AppState, AppActions } from '../';
import { fetchUser } from '../../server';
import User from '../../typing/User';
import { Dispatch } from 'redux';

const requestUserSuccess = (user: User): UserActions => ({
  type: REQUEST_USER_SUCCESS,
  payload: user
});

export const requestUser = (uid: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = await fetchUser(uid);
    dispatch(requestUserSuccess(user));
  };
};
