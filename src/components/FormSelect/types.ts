export type SelectErrorType =
  | 'required';

export interface Option {
  value: string;
  text: string;
};

export default interface SelectError {
  type: SelectErrorType;
  message: string;
};
