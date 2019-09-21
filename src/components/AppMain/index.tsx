import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';
import {IProps as SideNavProps} from '../SideNav';

import './index.css';

interface IProps extends SideNavProps {

};

const AppMain: React.FC<IProps> = props => {
  return (
    <main className="AppMain">
      <div className="container clearfix">
        <SideNav
          user={props.user}
          className="AppMain-SideNav"
        />

        <div className="AppMain-Content">
          <Switch>
            <Route path="/id:id" render={routeProps => (
              <UserPage {...routeProps} user={props.user} />
            )} />
            <Route path="/feed" />
            <Route path="/messages" render={routeProps => {
              <MessagesPage {...routeProps} user={props.user} />
            }} />
            <Route path="/friends" />
            <Route path="/groups" />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default AppMain;
