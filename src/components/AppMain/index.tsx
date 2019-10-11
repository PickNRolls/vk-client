import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BaseProps from '../../typing/BaseProps';
import { AppActions, AppState } from '../../store';
import { changePage } from '../../store/page/actions';
import { PageName } from '../../store/page/types';

import SignUpPage from '../SignUpPage';
import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';
import FriendsPage from '../FriendsPage';

import './index.css';

type Props =
  & BaseProps
  & ConnectedStateProps
  & ConnectedDispatchProps;

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
                    props.changePage('messages');
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

interface ConnectedDispatchProps {
  changePage: (name: PageName) => void;
}

const mapStateToProps = (state: AppState) => ({
  isUserLoggedIn: state.auth.isUserLoggedIn
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  changePage: bindActionCreators(changePage, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMain);
