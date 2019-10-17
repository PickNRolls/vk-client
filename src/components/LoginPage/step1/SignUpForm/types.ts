export interface Option {
  value: string;
  text: string;
};

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  day?: string;
  month?: string;
  year?: string;
};

export interface SubmitValues {
  firstName: string;
  lastName: string;
  birthday: Date;
};

export default interface ValuesState {
  firstName: string;
  lastName: string;
  day: string;
  month: string;
  year: string;
};
