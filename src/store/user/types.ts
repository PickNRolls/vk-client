import User from '../../typing/User';

export const SET = 'user/SET';
interface SetAction {
  type: typeof SET,
  payload: UserState;
};

export type UserActions =
  & SetAction;

type UserState = User;
export default UserState;
