import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Preloader from 'components/Preloader';
import UserPageAvatar from 'components/UserPageAvatar';
import UserPageInfo from 'components/UserPageInfo';

import UserState from 'store/user/types';
import User from 'typing/User';
import API from 'api';
import cn from 'classnames';
import { AppState, AppActions } from 'store';
import { change as changeTitle } from 'store/document/title/actions';

import css from './UserPage.css';

type Props = {
    uid: string;
    className?: string;
  }
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
    const propsClass = cn(this.props.className, 'clearfix');
    const cUserPage = cn(css.UserPage, propsClass);
    const { loadingUser } = this.state;
    let { user } = this.state;

    if (loadingUser) {
      return (
        <div className={cUserPage}>
          <Preloader className={css.Preloader} />
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
