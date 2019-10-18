import { Dispatch } from "redux";
import {
  TitleActions,
  CHANGE
} from "./types";

export const change = (title: string) => {
  document.title = title;
  return (dispatch: Dispatch<TitleActions>) => {
    dispatch({
      type: CHANGE,
      payload: title
    });
  };
};
