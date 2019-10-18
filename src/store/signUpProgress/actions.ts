import {
  SAVE_INTERMEDIATE_DATA,
  IntermediateData,
  GO_TO_STEP,
  SignUpProgressActions
} from "./types";

export const goToStep = (step: number): SignUpProgressActions => ({
  type: GO_TO_STEP,
  payload: step
});

export const saveIntermediateData = (data: IntermediateData): SignUpProgressActions => ({
  type: SAVE_INTERMEDIATE_DATA,
  payload: data
});
