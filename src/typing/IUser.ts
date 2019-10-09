import IMessage from "./IMessage";

type TLanguage = 'russian' | 'english' | 'german' | 'french';

export interface IUserAdditionalInfo {
  birthday: string;
  languages: TLanguage[];
}

export default interface IUser {
  id: string;
  avatar: string;
  fullName: string;
  firstName: string;
  lastName: string;
  status?: string;
  age: number;
  gender: boolean;
  online: true | Date;
  additionalInfo: IUserAdditionalInfo;
  connections: {
    [uid: string]: {
      messages: {
        list: IMessage[];
      };
    };
  };
};
