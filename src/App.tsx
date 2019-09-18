import React from 'react';

import IUser from './typing/IUser';

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
      <div>

      </div>
    );
  }
}

export default App;
