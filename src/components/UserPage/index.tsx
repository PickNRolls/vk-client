import React from 'react';

import UserPageAvatar from '../UserPageAvatar';
import UserPageInfo from '../UserPageInfo';

import User from '../../typing/User';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

interface IProps extends BaseProps {
  user: User;
};

interface IState {

};

class UserPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const propsClass = this.props.className ? this.props.className + ' clearfix' : 'clearfix';
    const cUserPage = cn('UserPage', propsClass);
    document.title = `${this.props.user.fullName}`;

    return (
      <div className={cUserPage}>
        <div className="page-column-thin">
          <UserPageAvatar imageUrl={this.props.user.avatar} />
        </div>
        <div className="page-column-wide">
          <UserPageInfo user={this.props.user} />
        </div>
      </div>
    );
  }
};

export default UserPage;
