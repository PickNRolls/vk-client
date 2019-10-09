import React from 'react';

import IUser from './typing/IUser';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

import { fetchUser, refreshUsers } from './server';

interface IProps {

};

interface IState {
  user: IUser;
  isUserFetched: boolean;
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: {} as IUser,
      isUserFetched: false
    };
  }

  componentDidMount() {
    fetchUser('00000000').then(user => this.setState({
      user,
      isUserFetched: true
    }));

    refreshUsers();
  }

  render() {
    if (!this.state.isUserFetched) {
      return (
        <div>
          Fetching...
        </div>
      );
    }

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
