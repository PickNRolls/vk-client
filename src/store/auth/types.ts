export const SIGN_IN = 'auth/SIGN_IN';
interface SignInAction {
  type: typeof SIGN_IN;
  payload: {
    email: string;
    password: string;
  };
};

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  birthday: Date;
  // email: string;
  // password: string;
};
export const SIGN_UP = 'auth/SIGN_UP';
interface SignUpAction {
  type: typeof SIGN_UP;
  payload: SignUpPayload;
};

export const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
};

export const SIGN_UP_FAIL = 'auth/SIGN_UP_FAIL';
interface SignUpFailAction {
  type: typeof SIGN_UP_FAIL;
  payload: any; // Firebase auth error
};

export const SIGN_LINKING = 'auth/SIGN_LINKING';
interface SignLinkingAction {
  type: typeof SIGN_LINKING;
  payload: {
    firebaseData: firebase.auth.UserCredential;
    appData: SignUpPayload;
  };
};

export const SIGN_LINKING_SUCCESS = 'auth/SIGN_LINKING_SUCCESS';
interface SignLinkingSuccessAction {
  type: typeof SIGN_LINKING_SUCCESS;
};

export type AuthActions =
  | SignUpAction
  | SignUpSuccessAction
  | SignUpFailAction

  | SignLinkingAction
  | SignLinkingSuccessAction

  | SignInAction;

export default interface AuthState {
  isUserLoggedIn: boolean;
};
