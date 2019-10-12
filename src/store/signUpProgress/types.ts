export const GO_TO_STEP = 'signUpProgress/GO_TO_STEP';
interface GoToStepAction {
  type: typeof GO_TO_STEP;
  payload: number;
};

export type SignUpProgressActions =
  | GoToStepAction;

export default interface SignUpProgressState {
  step: number;
};
