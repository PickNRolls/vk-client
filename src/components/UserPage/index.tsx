import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Preloader from '../Preloader';
import UserPageAvatar from '../UserPageAvatar';
import UserPageInfo from '../UserPageInfo';

import UserState from '../../store/user/types';
import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import API from '../../api';
import cn from '../../helpers/cn';
import { AppState, AppActions } from '../../store';
import { change as changeTitle } from '../../store/document/title/actions';

import './index.css';

type Props = {
    uid: string;
  }
  & BaseProps
  & ConnectedStateProps
  & ConnectedDispatchProps;

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
    const { uid, appUser } = this.props;

    this.setState({
      loadingUser: true
    });

    let user;
    if (uid === appUser.id) {
      user = appUser;
    } else {
      user = await API.user.find(uid);
    }

    if (user === null) {
      throw new Error('user === null');
    }

    this.setState({
      user,
      loadingUser: false
    });
    this.props.changeTitle(`${user.fullName}`);
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

interface ConnectedDispatchProps {
  changeTitle: (title: string) => void;
}

const mapStateToProps = (state: AppState) => ({
  appUser: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  changeTitle: (title: string) => changeTitle(title)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
