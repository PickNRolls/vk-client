type Language = 'russian' | 'english' | 'german' | 'french';

export interface UserAdditionalInfo {
  birthday: string;
  languages?: Language[];
}

export default interface User {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  age: number;
  additionalInfo: UserAdditionalInfo;
  online: true | Date;
  avatar?: string;
  status?: string;
  gender?: boolean;
  friends?: string[];
};
