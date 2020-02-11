import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseProps from '../../typing/BaseProps';
import { AppState } from '../../store';
import UserState from '../../store/user/types';

import SignUpPage from '../LoginPage';
import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';
import FriendsPage from '../FriendsPage';

import css from './AppMain.css';

type Props =
  & BaseProps
  & ConnectedStateProps;

const AppMain: React.FC<Props> = props => {
  return (
    <main className={css.AppMain}>
      <div className="container clearfix">
        {
          !props.isUserLoggedIn && <Redirect to="/login" />
        }

        <SideNav
          className={css.SideNav}
        />

        <div className={css.Content}>
          <Switch>
            <Route path="/login" render={() => {
              return !props.isUserLoggedIn ?
                <SignUpPage /> :
                <Redirect to={`/id${props.user.id}`} />;
            }} />

            <Route path="/id:id" render={routerProps => {
              return <UserPage uid={routerProps.match.params.id} />;
            }} />

            <Route path="/feed" />

            <Route path="/messages" render={routerProps => {
              return <MessagesPage {...routerProps} />;
            }} />

            <Route path="/friends" render={() => {
              return <FriendsPage />;
            }} />

            <Route path="/groups" />
          </Switch>
        </div>
      </div>
    </main>
  );
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
)(AppMain);
