import React from 'react';

import UserPageAvatar from '../UserPageAvatar';
import UserPageInfo from '../UserPageInfo';

import IUser from '../../typing/IUser';
import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

interface IProps extends IBaseProps {
  user: IUser;
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
