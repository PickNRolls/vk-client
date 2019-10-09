import React from 'react';

import UserPageAvatar from '../UserPageAvatar';
import UserPageInfo from '../UserPageInfo';

import User from '../../typing/User';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import { connect } from 'react-redux';
import { AppState } from '../../store';

type Props = BaseProps & ConnectStateProps;

class UserPage extends React.Component<Props> {
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

interface ConnectStateProps {
  user: User;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default connect(mapStateToProps)(UserPage);
