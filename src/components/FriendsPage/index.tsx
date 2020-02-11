import * as React from 'react';
import { withRouter, RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';

import Preloader from '../Preloader';
import FriendsPageWide from '../FriendsPageWide';

import User from '../../typing/User';
import UserState from '../../store/user/types';
import { AppState } from '../../store';

import cn from '../../helpers/cn';

import './index.css';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & ConnectedStateProps & RouteChildrenProps;
export type Category =
  | 'default';

interface State {
  category: Category;
  loadingFriends: boolean;
  friends: User[];
};

class FriendsPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      category: 'default',
      loadingFriends: true,
      friends: []
    };
  }

  async componentDidMount() {
    // const friends = await fetchUsers(this.props.user.friends);
    // this.setState({
    //   friends,
    //   loadingFriends: false
    // });
  }

  render() {
    const cFriendsPage = cn('FriendsPage', this.props.className);

    if (this.state.loadingFriends) {
      return (
        <div className={cFriendsPage}>
          <div className="page-column-wide">
            <Preloader className="FriendsPage-Preloader" />
          </div>
          <div className="page-column-thin">

          </div>
        </div>
      );
    }

    return (
      <div className={cFriendsPage}>
        <div className="page-column-wide">
          <FriendsPageWide
            category={this.state.category}
            friends={this.state.friends}
          />
        </div>
        <div className="page-column-thin">

        </div>
      </div>
    );
  }
};

interface ConnectedStateProps {
  user: UserState;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default withRouter(connect(
  mapStateToProps
)(FriendsPage));
