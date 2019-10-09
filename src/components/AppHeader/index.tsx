import React from 'react';

import './index.css';

import Logo from '../Logo';

interface IProps {

};

interface IState {

};

class AppHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <header className="AppHeader">
        <div className="container AppHeader-Container">
          <Logo className="AppHeader-Logo" />
        </div>
      </header>
    );
  }
};

export default AppHeader;
