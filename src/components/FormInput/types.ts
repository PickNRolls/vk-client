export type InputErrorType =
  | 'type'
  | 'required'
  | 'minLength'
  | 'maxLength';

export default interface InputError {
  type: InputErrorType;
  message: string;
};
