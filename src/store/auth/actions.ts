import {
  AuthActions,
  SIGN_UP,
  SIGN_IN,
  signUpPayload
} from './types';

export const signUp = (payload: signUpPayload): AuthActions => ({
  type: SIGN_UP,
  payload
});

export const signIn = (email: string, password: string): AuthActions => ({
  type: SIGN_IN,
  payload: {
    email,
    password
  }
});
