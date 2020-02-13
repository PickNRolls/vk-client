import * as React from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { connect, } from 'react-redux';

import { AppState, } from 'store';
import UserState from 'store/user/types';

import SignUpPage from 'components/LoginPage';
import SideNav from 'components/SideNav';
import UserPage from 'components/UserPage';
import MessagesPage from 'components/MessagesPage';
import FriendsPage from 'components/FriendsPage';

import css from './AppMain.css';

type Props =
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
}

const mapStateToProps = (state: AppState) => ({
  isUserLoggedIn: state.auth.isUserLoggedIn,
  user: state.user,
});


export default connect(
  mapStateToProps
)(AppMain);
