import IUser from './IUser';

export default interface IMessage {
  author: IUser;
  content: string;
  date: Date;
};
