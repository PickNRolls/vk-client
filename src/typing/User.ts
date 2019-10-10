import Message from "./Message";

type Language = 'russian' | 'english' | 'german' | 'french';

export interface UserAdditionalInfo {
  birthday: string;
  languages: Language[];
}

export default interface User {
  id: string;
  avatar: string;
  fullName: string;
  firstName: string;
  lastName: string;
  status?: string;
  age: number;
  gender: boolean;
  online: true | Date;
  additionalInfo: UserAdditionalInfo;
  friends: string[];
  connections: {
    [uid: string]: {
      messages: {
        list: Message[];
      };
    };
  };
};
