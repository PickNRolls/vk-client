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
        fullName: 'Илья Блинков',
        firstName: 'Илья',
        lastName: 'Блинков',
        age: 18,
        gender: true
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
