import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

import BaseProps from '../../typing/BaseProps';
import { AppActions } from '../../store';
import { changePage } from '../../store/page/actions';

import SideNav from '../SideNav';
import UserPage from '../UserPage';
import MessagesPage from '../MessagesPage';

import './index.css';
import { connect } from 'react-redux';
import { PageName } from '../../store/page/types';

type Props = BaseProps & ConnectedDispatchProps;

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
            <Route path="/messages" render={routerProps => {
              props.changePage('messages');
              return <MessagesPage {...routerProps} />;
            }} />
            <Route path="/friends" />
            <Route path="/groups" />
          </Switch>
        </div>
      </div>
    </main>
  );
};

interface ConnectedDispatchProps {
  changePage: (name: PageName) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  changePage: bindActionCreators(changePage, dispatch)
});

export default connect(null, mapDispatchToProps)(AppMain);
