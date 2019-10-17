import SignUpProgressState, {
  SignUpProgressActions,
  GO_TO_STEP
} from "./types";

const initialState: SignUpProgressState = {
  step: 1
};

export default (state = initialState, action: SignUpProgressActions) => {
  switch (action.type) {
    case GO_TO_STEP: {
      return {
        ...state,
        step: action.payload
      };
    }

    default: return state;
  }
};
