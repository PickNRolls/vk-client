import IUser from "./typing/IUser";

interface IUsersHash {
  [uid: string]: IUser;
};

const users: IUsersHash = {
  '00000000': {
    id: '00000000',
    fullName: 'Илья Блинков',
    firstName: 'Илья',
    lastName: 'Блинков',
    age: 18,
    gender: true
  },
  '00000001': {
    id: '00000001',
    fullName: 'Марина Граф',
    firstName: 'Марина',
    lastName: 'Граф',
    age: 18,
    gender: false
  }
};

export const fetchUser = (uid: IUser['id']): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users[uid]);
    }, 800);
  });
};
