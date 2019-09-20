import React from 'react';

import IUser from './typing/IUser';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

interface IProps {

};

interface IState {
  user: IUser | null;
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <>
        <AppHeader />
        <Main />
      </>
    );
  }
}

export default App;
