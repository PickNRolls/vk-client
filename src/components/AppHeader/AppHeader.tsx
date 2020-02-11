import * as React from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo';
import Settings from './Settings';

import { AppState } from '../../store';
import UserState from '../../store/user/types';

import cn from 'classnames';

import css from './AppHeader.css';

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

    const cAppHeader = cn(css.AppHeader);

    return (
      <header className={cAppHeader}>
        <div className={cn('container', css.Container)}>
          <Logo className={css.Logo} />

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
