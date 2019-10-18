import TitleState, {
  CHANGE
} from "./types";
import { AppActions } from "../..";

const initialState: TitleState = '';

export default (state = initialState, action: AppActions): TitleState => {
  switch (action.type) {
    case CHANGE: {
      return action.payload;
    }

    default: return state;
  }
};
