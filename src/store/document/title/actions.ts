import { Dispatch } from "redux";
import {
  TitleActions,
  CHANGE
} from "./types";

export const change = (title: string) => (dispatch: Dispatch<TitleActions>) => {
  document.title = title;
  dispatch({
    type: CHANGE,
    payload: title
  });
};
