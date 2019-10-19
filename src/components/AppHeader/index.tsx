import React from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo';
import Settings from './Settings';

import { AppState } from '../../store';
import UserState from '../../store/user/types';

import cn from '../../helpers/cn';

import './index.css';

type Props =
  & ConnectedStateProps;

interface State {

};

class AppHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      user,
      isUserLoggedIn
    } = this.props;

    const cAppHeader = cn('AppHeader');

    return (
      <header className={cAppHeader}>
        <div className="container AppHeader-Container">
          <Logo className="AppHeader-Logo" />

          {isUserLoggedIn && <Settings user={user} />}
        </div>
      </header>
    );
  }
};

interface ConnectedStateProps {
  isUserLoggedIn: boolean;
  user: UserState;
};

const mapStateToProps = (state: AppState) => ({
  isUserLoggedIn: state.auth.isUserLoggedIn,
  user: state.user
});

export default connect(
  mapStateToProps
)(AppHeader);
