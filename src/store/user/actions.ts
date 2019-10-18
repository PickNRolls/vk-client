import UserState, {
  SET, UserActions
} from "./types";
import { Dispatch } from "redux";

export const set = (user: UserState) => (dispatch: Dispatch<UserActions>) => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch({
    type: SET,
    payload: user
  });
};
