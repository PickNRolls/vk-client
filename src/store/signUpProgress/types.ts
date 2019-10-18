export const GO_TO_STEP = 'signUpProgress/GO_TO_STEP';
interface GoToStepAction {
  type: typeof GO_TO_STEP;
  payload: number;
};

export const SAVE_INTERMEDIATE_DATA = 'signUpProgress/SAVE_INTERMEDIATE_DATA';
interface SaveIntermediateDataAction {
  type: typeof SAVE_INTERMEDIATE_DATA;
  payload: IntermediateData;
};

export type SignUpProgressActions =
  | GoToStepAction
  | SaveIntermediateDataAction;


export interface IntermediateData {
  firstName?: string;
  lastName?: string;
  birthday?: Date | null;
  email?: string;
  password?: string;
};

export default interface SignUpProgressState {
  step: number;
  intermediateData: IntermediateData;
};
