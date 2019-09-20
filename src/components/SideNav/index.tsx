import React from 'react';
import { Link } from 'react-router-dom';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import iconMyPage from './assets/home-page.png';
import iconFeed from './assets/feed.png';
import iconGroups from './assets/groups.png';
import iconMessages from './assets/messages.png';
import iconFriends from './assets/friends.png';
import './index.css';

interface INavItem {
  text: string;
  url: string;
  icon: string;
};

export interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {
  items: INavItem[];
};

class SideNav extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: [
        {
          text: 'Моя страница',
          url: `/id${props.user.id}`,
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
      ]
    };
  }

  render() {
    const cSideNav = cn('SideNav', this.props.className);
    return (
      <nav className={cSideNav}>
        <ul className="SideNav-List">
          {
            this.state.items.map(item => (
              <li className="SideNav-Item" key={item.url}>
                <Link to={item.url} className="SideNav-ItemLink">
                  <span className="SideNav-ItemIcon">
                    <img src={item.icon} alt={item.text} />
                  </span>
                  <span className="SideNav-ItemText">
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

export default SideNav;
