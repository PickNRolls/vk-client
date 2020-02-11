import * as React from 'react';
import { Link } from 'react-router-dom';

import User from 'typing/User';
import cn from 'classnames';

import iconMyPage from './assets/home-page.png';
import iconFeed from './assets/feed.png';
import iconGroups from './assets/groups.png';
import iconMessages from './assets/messages.png';
import iconFriends from './assets/friends.png';
import css from './SideNav.css';
import { connect } from 'react-redux';
import { AppState } from 'store';

interface INavItem {
  text: string;
  url: string;
  icon: string;
};

interface OwnProps {
  className?: string;
}

type Props = OwnProps & ConnectedStateProps;

class SideNav extends React.Component<Props> {
  _getItems(uid: string): INavItem[] {
    return [
      {
        text: 'Моя страница',
        url: `/id${uid}`,
        icon: iconMyPage
      },
      {
        text: 'Новости',
        url: `/feed`,
        icon: iconFeed
      },
      {
        text: 'Сообщения',
        url: `/messages`,
        icon: iconMessages
      },
      {
        text: 'Друзья',
        url: `/friends`,
        icon: iconFriends
      },
      {
        text: 'Сообщества',
        url: `/groups`,
        icon: iconGroups
      }
    ];
  }

  render() {
    const cSideNav = cn(css.SideNav, this.props.className);
    const items = this._getItems(this.props.user.id);
    return (
      <nav className={cSideNav}>
        <ul className={css.List}>
          {
            items.map(item => (
              <li className={css.Item} key={item.url}>
                <Link to={item.url} className={css.ItemLink}>
                  <span className={css.ItemIcon}>
                    <img src={item.icon} alt={item.text} />
                  </span>
                  <span className={css.ItemText}>
                    {item.text}
                  </span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
};

interface ConnectedStateProps {
  user: User;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SideNav);
