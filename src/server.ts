import User from "./typing/User";

interface UsersHash {
  [uid: string]: User;
};

const users: UsersHash = {
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
    },
    connections: {
      '00000001': {
        messages: {
          list: [] // will be redefined
        }
      }
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
    },
    connections: {
      '00000000': {
        messages: {
          list: [
            {
              id: '0000000000',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000001',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000002',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000003',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000004',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000005',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000006',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000007',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000008',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000009',
              authorId: '00000000',
              content: 'ну привет кста',
              date: new Date()
            },
            {
              id: '0000000010',
              authorId: '00000000',
              content: 'как дела?',
              date: new Date()
            },
            {
              id: '0000000011',
              authorId: '00000001',
              content: 'хорошо',
              date: new Date()
            },
            {
              id: '0000000012',
              authorId: '00000000',
              content: 'хорошо, что хорошо',
              date: new Date()
            },
            {
              id: '0000000013',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000014',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000015',
              authorId: '00000001',
              content: 'Я зябла',
              date: new Date()
            },
            {
              id: '0000000016',
              authorId: '00000000',
              content: 'ну привет кста',
              date: new Date()
            },
            {
              id: '0000000017',
              authorId: '00000000',
              content: 'как дела?',
              date: new Date()
            },
            {
              id: '0000000018',
              authorId: '00000001',
              content: 'хорошо',
              date: new Date()
            },
            {
              id: '0000000019',
              authorId: '00000000',
              content: 'хорошо, что хорошо',
              date: new Date()
            },
            {
              id: '0000000020',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000021',
              authorId: '00000001',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000022',
              authorId: '00000001',
              content: 'Я зябла',
              date: new Date()
            },
            {
              id: '0000000023',
              authorId: '00000000',
              content: 'ну привет кста',
              date: new Date()
            },
            {
              id: '0000000024',
              authorId: '00000000',
              content: 'как дела?',
              date: new Date()
            },
            {
              id: '0000000025',
              authorId: '00000001',
              content: 'хорошо',
              date: new Date()
            },
            {
              id: '0000000026',
              authorId: '00000000',
              content: 'хорошо, что хорошо',
              date: new Date()
            },
            {
              id: '0000000027',
              authorId: '00000000',
              content: 'ПриветПриветПриветПриветПривет ПриветПриветПривет ПриветПривет',
              date: new Date()
            },
            {
              id: '0000000028',
              authorId: '00000000',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000029',
              authorId: '00000000',
              content: 'Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет',
              date: new Date()
            }
          ]
        }
      }
    }
  },
  '00000002': {
    id: '00000002',
    avatar: 'https://sun9-60.userapi.com/c850216/v850216438/1e8d4f/-616QOAv5tM.jpg',
    fullName: 'Данил Чагин',
    firstName: 'Данил',
    lastName: 'Чагин',
    age: 18,
    gender: true,
    online: true,
    additionalInfo: {
      birthday: '17.12.2001',
      languages: ['russian', 'english']
    },
    connections: {
      '00000000': {
        messages: {
          list: [
            {
              id: '0000000000',
              authorId: '00000002',
              content: 'Привет',
              date: new Date()
            },
            {
              id: '0000000001',
              authorId: '00000002',
              content: 'Я зябла',
              date: new Date()
            },
            {
              id: '0000000002',
              authorId: '00000000',
              content: 'ну привет кста',
              date: new Date()
            },
            {
              id: '0000000003',
              authorId: '00000000',
              content: 'как дела?',
              date: new Date()
            },
            {
              id: '0000000004',
              authorId: '00000002',
              content: 'хорошо',
              date: new Date()
            },
            {
              id: '0000000005',
              authorId: '00000000',
              content: 'хорошо, что хорошо',
              date: new Date()
            }
          ] // will be redefined
        }
      }
    }
  },
};

export const refreshUsers = () => {
  users['00000000'].connections['00000001'].messages.list =
    users['00000001'].connections['00000000'].messages.list;

  users['00000000'].connections['00000002'] = {
    messages: {
      list: users['00000002'].connections['00000000'].messages.list
    }
  };
};

export const fetchUsers = (uids: string[]): Promise<User[]> => {
  return new Promise(resolve => {
    refreshUsers();
    setTimeout(() => {
      resolve(uids.map(uid => users[uid]));
    }, 800);
  });
};
