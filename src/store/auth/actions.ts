import { Dispatch } from 'redux';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AppActions } from '..';
import {
  AuthActions,
  SIGN_IN,

  SignUpPayload,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,

  SIGN_LINKING_SUCCESS
} from './types';
import getNextUserId from '../../helpers/getNextUserId';
import { ThunkDispatch } from 'redux-thunk';

const db = firebase.firestore();

const signUpSuccess = (): AuthActions => ({
  type: SIGN_UP_SUCCESS
});

const signUpFail = (error: any): AuthActions => ({
  type: SIGN_UP_FAIL,
  payload: error
});

export const signUp = (payload: SignUpPayload) => {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(
        'uoeuoeu@ya.ru',
        '123123'
      );

      const thunkDispatch = dispatch as ThunkDispatch<any, any, AppActions>;
      await thunkDispatch(signLinking(response, payload));
    } catch (error) {
      return dispatch(signUpFail(error));
    }
    
    dispatch(signUpSuccess());
  };
};

export const signLinking = (
  firebaseData: firebase.auth.UserCredential,
  appData: SignUpPayload
  ) => {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      const usersCounterDoc = await db.collection('counters').doc('users');
      const usersSnapshot = await usersCounterDoc.get();
      if (!firebaseData.user) throw new Error('no user');

      const firebaseUid = firebaseData.user.uid;
      const nextId = await getNextUserId(usersSnapshot, firebaseUid);
      if (!nextId) throw new Error('no nextId');

      await usersCounterDoc.update({
        id: nextId
      });

      await db.collection('users').doc(firebaseUid).set({
        appId: nextId,
        ...appData
      });

      await db.collection('appIdsLinks').doc(nextId).set({
        uid: firebaseUid
      });

    } catch (error) {
      console.log(error);
    }
  };
}

export const signIn = (email: string, password: string): AuthActions => ({
  type: SIGN_IN,
  payload: {
    email,
    password
  }
});
