import React from 'react';

import IUser from '../../typing/IUser';
import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

import UserInfoField from '../UserInfoField';

interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {
  expanded: boolean;
};

class UserPageInfo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { user } = this.props;
    const cUserPageInfo = cn('UserPageInfo', this.props.className);
    return (
      <div className={cUserPageInfo}>
        <div className="UserPageInfo-Top">
          <span className="UserPageInfo-Name">
            {user.fullName}
          </span>
          <span className="UserPageInfo-Online">
            {user.online ? 'Online' : 'Offline'}
          </span>
        </div>

        {
        user.status
          ? <span className="UserPageInfo-Status">
              {user.status}
            </span>

          : null
        }

        <div className="UserPageInfo-AlwaysVisible">
          <UserInfoField label="birthday" data="26.10.2001" />
        </div>
      </div>
    );
  }
};

export default UserPageInfo;
