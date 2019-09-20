import React from 'react';

import UserPageAvatar from '../UserPageAvatar';

import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

interface IProps extends IBaseProps {

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
          <UserPageAvatar imageUrl="https://sun9-41.userapi.com/c846018/v846018774/1964b4/MTv4NbdWX0E.jpg?ava=1" />
        </div>
        <div className="page-column-wide">

        </div>
      </div>
    );
  }
};

export default UserPage;
