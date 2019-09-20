import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SideNav from '../SideNav';
import {IProps as SideNavProps} from '../SideNav';

interface IProps extends SideNavProps {

};

const AppMain: React.FC<IProps> = props => {
  return (
    <main className="AppMain">
      <div className="container">
        <SideNav
          user={props.user}
          className="AppMain-SideNav"
        />

        <Switch>
          <Route path="/id:id" />
          <Route path="/feed" />
          <Route path="/messages" />
          <Route path="/friends" />
          <Route path="/groups" />
        </Switch>
      </div>
    </main>
  );
};

export default AppMain;
