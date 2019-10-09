import React from 'react';

import './index.css';

import Logo from '../Logo';

interface Props {

};

interface State {

};

class AppHeader extends React.Component<Props, State> {
  constructor(props: Props) {
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
