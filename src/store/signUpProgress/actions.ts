import {
  SignUpProgressActions,
  GO_TO_STEP
} from "./types";

export const goToStep = (step: number): SignUpProgressActions => ({
  type: GO_TO_STEP,
  payload: step
});
