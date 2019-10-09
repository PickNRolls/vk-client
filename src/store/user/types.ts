import User from '../../typing/User';

export const REQUEST_USER = 'user/REQUEST_USER';
interface RequestUserAction {
  type: typeof REQUEST_USER,
  payload: string;
};

export const REQUEST_USER_SUCCESS = 'user/REQUEST_USER_SUCCESS';
interface RequestUserSuccessAction {
  type: typeof REQUEST_USER_SUCCESS,
  payload: User
};

export type UserActions =
  | RequestUserAction
  | RequestUserSuccessAction;


type UserState = User;
export default UserState;
