import IUser from "./typing/IUser";

interface IUsersHash {
  [uid: string]: IUser;
};

const users: IUsersHash = {
  '00000000': {
    id: '00000000',
    avatar: 'https://sun9-41.userapi.com/c846018/v846018774/1964b4/MTv4NbdWX0E.jpg?ava=1',
    fullName: 'Илья Блинков',
    firstName: 'Илья',
    lastName: 'Блинков',
    age: 18,
    gender: true,
    online: true,
    additionalInfo: {
      birthday: '19.03.2001',
      languages: ['russian', 'english']
    }
  },
  '00000001': {
    id: '00000001',
    avatar: 'https://sun1-88.userapi.com/c830408/v830408081/1763fd/6bqGEcza6lo.jpg',
    fullName: 'Марина Граф',
    firstName: 'Марина',
    lastName: 'Граф',
    age: 18,
    gender: false,
    online: new Date(),
    additionalInfo: {
      birthday: '07.04.2001',
      languages: ['russian', 'english']
    }
  }
};

export const fetchUser = (uid: IUser['id']): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users[uid]);
    }, 800);
  });
};
