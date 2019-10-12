import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseProps from '../../typing/BaseProps';
import { AppState } from '../../store';

import SignUpPage from '../SignUpPage';
import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';
import FriendsPage from '../FriendsPage';

import './index.css';

type Props =
  & BaseProps
  & ConnectedStateProps;

const AppMain: React.FC<Props> = props => {
  return (
    <main className="AppMain">
      <div className="container clearfix">
        {
          props.isUserLoggedIn ?
          <>
              <SideNav
                className="AppMain-SideNav"
              />

              <div className="AppMain-Content">
                <Switch>
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
          </> :

          <>
            <Redirect to="/login" />
            <Route path="/login" render={() => {
              return <SignUpPage />;
            }} />
          </>
        }
      </div>
    </main>
  );
};

interface ConnectedStateProps {
  isUserLoggedIn: boolean;
};

const mapStateToProps = (state: AppState) => ({
  isUserLoggedIn: state.auth.isUserLoggedIn
});


export default connect(
  mapStateToProps
)(AppMain);
