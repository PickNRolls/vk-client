import * as React from 'react';
import { withRouter, RouteChildrenProps, } from 'react-router';
import { connect, } from 'react-redux';

import Preloader from 'components/Preloader';
import FriendsPageWide from 'components/FriendsPageWide';

import { Category, } from './types';
import User from 'typing/User';

import cn from 'classnames';

import css from './FriendsPage.css';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & RouteChildrenProps;


interface State {
  category: Category;
  loadingFriends: boolean;
  friends: User[];
}

class FriendsPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      category: 'default',
      loadingFriends: true,
      friends: [],
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
    const cFriendsPage = cn(css.FriendsPage, this.props.className);

    if (this.state.loadingFriends) {
      return (
        <div className={cFriendsPage}>
          <div className="page-column-wide">
            <Preloader className={css.Preloader} />
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
}

export default FriendsPage;
