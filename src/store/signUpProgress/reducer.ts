import SignUpProgressState, {
  GO_TO_STEP,
  SAVE_INTERMEDIATE_DATA
} from "./types";
import {SIGN_UP_SUCCESS} from '../auth/types'
import { AppActions } from "..";

const initialState: SignUpProgressState = {
  step: 1,
  intermediateData: {
    firstName: '',
    lastName: '',
    birthday: null,
    email: '',
    password: ''
  }
};

export default (state = initialState, action: AppActions): SignUpProgressState => {
  switch (action.type) {
    case GO_TO_STEP: {
      return {
        ...state,
        step: action.payload
      };
    }

    case SAVE_INTERMEDIATE_DATA: {
      const stateIntermediateData = state.intermediateData;
      return {
        ...state,
        intermediateData: {
          ...stateIntermediateData,
          ...action.payload
        }
      };
    }

    case SIGN_UP_SUCCESS: {
      const currentStep = state.step;
      return {
        ...state,
        step: currentStep + 1
      };
    }

    default: return state;
  }
};
