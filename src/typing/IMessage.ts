import IUser from './IUser';

export default interface IMessage {
  id: string;
  author: IUser;
  content: string;
  date: Date;
};
