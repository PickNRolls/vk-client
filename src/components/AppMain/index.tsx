import React from 'react';

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
      </div>
    </main>
  );
};

export default AppMain;
