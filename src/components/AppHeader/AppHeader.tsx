import * as React from 'react';
import { connect, } from 'react-redux';

import Logo from 'components/Logo';
import Settings from './Settings';

import cn from 'classnames';

import css from './AppHeader.css';

interface Props {
  
}

interface State {

}

class AppHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cAppHeader = cn(css.AppHeader);

    return (
      <header className={cAppHeader}>
        <div className={cn('container', css.Container)}>
          <Logo className={css.Logo} />

          <Settings user={{
            fullName: ',.1.1.,',
            lastName: 'uoeu',
            age: 123,
            firstName: 'mi',
            avatar: 'uoe',
            id: '123123',
          }} />
        </div>
      </header>
    );
  }
}

export default AppHeader;
