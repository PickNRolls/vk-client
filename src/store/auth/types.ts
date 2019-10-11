export const SIGN_IN = 'auth/SIGN_IN';
interface signInAction {
  type: typeof SIGN_IN;
  payload: {
    email: string;
    password: string;
  };
};

export interface signUpPayload {
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  password: string;
};
export const SIGN_UP = 'auth/SIGN_UP';
interface signUpAction {
  type: typeof SIGN_UP;
  payload: signUpPayload;
};

export type AuthActions =
  | signUpAction
  | signInAction;

export default interface AuthState {
  isUserLoggedIn: boolean;
};
