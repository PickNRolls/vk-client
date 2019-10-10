import React from 'react';
import { connect } from 'react-redux';

import Preloader from '../Preloader';
import UserPageAvatar from '../UserPageAvatar';
import UserPageInfo from '../UserPageInfo';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from '../../helpers/cn';
import { AppState } from '../../store';
import UserState from '../../store/user/types';
import { fetchUsers } from '../../server';

import './index.css';

type Props = {
    uid: string;
  }
  & BaseProps
  & ConnectedStateProps;

interface State {
  user: User | null;
  loadingUser: boolean;
};

class UserPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: null,
      loadingUser: true
    };
  }

  async loadUser() {
    const { uid } = this.props;

    this.setState({
      loadingUser: true
    });

    const [user] = await fetchUsers([uid]);

    this.setState({
      user,
      loadingUser: false
    });
  }

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.uid !== this.props.uid) {
      this.loadUser();
    }
  }

  render() {
    const propsClass = this.props.className ? this.props.className + ' clearfix' : 'clearfix';
    const cUserPage = cn('UserPage', propsClass);
    const { loadingUser } = this.state;
    let { user } = this.state;

    if (loadingUser) {
      return (
        <div className={cUserPage}>
          <Preloader className="UserPage-Preloader" />
        </div>
      );
    }

    user = user as User;

    document.title = `${user.fullName}`;

    return (
      <div className={cUserPage}>
        <div className="page-column-thin">
          <UserPageAvatar imageUrl={user.avatar} />
        </div>
        <div className="page-column-wide">
          <UserPageInfo
            isPageMine={user.id === this.props.appUser.id}
            user={user}
          />
        </div>
      </div>
    );
  }
};

interface ConnectedStateProps {
  appUser: UserState;
};

const mapStateToProps = (state: AppState) => ({
  appUser: state.user
});

export default connect(
  mapStateToProps
)(UserPage);
