import {
  UserActions,
  REQUEST_USER_SUCCESS
} from './types';
import { AppState, AppActions } from '../';
import { fetchUsers } from '../../server';
import User from '../../typing/User';
import { Dispatch } from 'redux';

const requestUserSuccess = (user: User): UserActions => ({
  type: REQUEST_USER_SUCCESS,
  payload: user
});

export const requestUser = (uid: string) => {
  return async (dispatch: Dispatch<AppActions>) => {
    const users = await fetchUsers([uid]);
    dispatch(requestUserSuccess(users[0]));
  };
};
