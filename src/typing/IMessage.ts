import IUser from './IUser';

export default interface IMessage {
  id: string;
  authorId: IUser['id'];
  content: string;
  date: Date;
};
