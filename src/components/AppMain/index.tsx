import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BaseProps from '../../typing/BaseProps';

import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';

import './index.css';

interface Props extends BaseProps {
};

const AppMain: React.FC<Props> = props => {
  return (
    <main className="AppMain">
      <div className="container clearfix">
        <SideNav
          className="AppMain-SideNav"
        />

        <div className="AppMain-Content">
          <Switch>
            <Route path="/id:id" component={UserPage} />
            <Route path="/feed" />
            <Route path="/messages" component={MessagesPage} />
            <Route path="/friends" />
            <Route path="/groups" />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default AppMain;
