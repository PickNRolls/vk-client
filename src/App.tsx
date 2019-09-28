import React from 'react';

import IUser from './typing/IUser';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

interface IProps {

};

interface IState {
  user: IUser;
  messages: {
    interlocutorsId: IUser['id'][];
  };
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: {
        id: '00000000',
        avatar: "https://sun9-41.userapi.com/c846018/v846018774/1964b4/MTv4NbdWX0E.jpg?ava=1",
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

      messages: {
        interlocutorsId: ['00000000', '00000001']
      }
    };
  }

  render() {
    return (
      <>
        <AppHeader />
        <Main
          {...this.state}
        />
      </>
    );
  }
}

export default App;
