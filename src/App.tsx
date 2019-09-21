import React from 'react';

import IUser from './typing/IUser';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

interface IProps {

};

interface IState {
  user: IUser;
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
      }
    };
  }

  render() {
    return (
      <>
        <AppHeader />
        <Main user={this.state.user} />
      </>
    );
  }
}

export default App;
