import TitleState, {
  TitleActions,
  CHANGE
} from "./types";

const initialState: TitleState = '';

export default (state = initialState, action: TitleActions): TitleState => {
  switch (action.type) {
    case CHANGE: {
      return action.payload;
    }

    default: return state;
  }
};
