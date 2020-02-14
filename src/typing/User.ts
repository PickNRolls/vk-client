export enum Language {
  Russian = 'russian',
  English = 'english',
  German = 'german',
  French = 'french',
}

export interface AdditionalInfo {
  birthday: string;
  languages?: Language[];
}

export default interface User {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  age: number;
  additionalInfo?: AdditionalInfo;
  online?: true | Date;
  avatar?: string;
  status?: string;
  gender?: boolean;
  friends?: string[];
}
