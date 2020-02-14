import * as React from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import { connect, } from 'react-redux';

import SignUpPage from 'components/LoginPage';
import SideNav from 'components/SideNav';
import UserPage from 'components/UserPage';
import MessagesPage from 'components/MessagesPage';
import FriendsPage from 'components/FriendsPage';

import css from './AppMain.css';

interface OwnProps {

}

type Props =
  & OwnProps
  & RouteProps;

const AppMain: React.FC<Props> = props => {
  return (
    <main className={css.AppMain}>
      <div className="container clearfix">
        {
          true && <Redirect to="/login" />
        }

        <SideNav
          className={css.SideNav}
        />

        <div className={css.Content}>
          <Switch>
            <Route path="/login" render={() => {
              return true ?
                <SignUpPage /> :
                <Redirect to={`/id000000000`} />;
            }} />

            <Route path="/id:id" render={routerProps => {
              return <UserPage uid={routerProps.match.params.id} />;
            }} />

            <Route path="/feed" />

            <Route path="/messages" render={routerProps => {
              return <MessagesPage {...routerProps} />;
            }} />

            <Route path="/friends" render={props => {
              return <FriendsPage {...props} />;
            }} />

            <Route path="/groups" />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default AppMain;
