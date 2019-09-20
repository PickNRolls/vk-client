import React from 'react';

import SideNav from '../SideNav';

interface IProps {

};

const AppMain: React.FC<IProps> = props => {
  return (
    <main className="AppMain">
      <div className="container">
        <SideNav />
      </div>
    </main>
  );
};

export default AppMain;
