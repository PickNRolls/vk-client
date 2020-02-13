import * as React from 'react';

import PageList from 'components/PageList';
import Friend from 'components/Friend';

import { types as FriendsPageTypes, } from 'components/FriendsPage';
import { OwnProps as FriendProps, } from 'components/Friend';
import User from 'typing/User';

import I18N from 'helpers/i18n';
import localKeyset from './i18n';

import css from './FriendsPageWide.css';

interface Props {
  category: FriendsPageTypes.Category;
  friends: User[];
}

const FriendsPageWide: React.FC<Props> = props => {
  return (
    <div>
      <PageList<FriendProps>
        header={{
          type: 'tabs',
          tabs: [
            {
              value: 'all-friends',
              text: I18N(localKeyset, 'all-friends'),
              count: 2,
            },
            {
              value: 'online-friends',
              text: I18N(localKeyset, 'online-friends'),
              count: 1,
            },
          ],
          button: {
            text: I18N(localKeyset, 'find-friends'),
            onClick: (event) => console.log(event),
          },
          onTabChange: (value) => console.log(value),
        }}

        itemComponent={Friend}

        items={props.friends.map(user => ({
          ...user,
          uniqId: user.id,
        }))}

        listProps={{
          className: css.List,
        }}
      />
    </div>
  );
};

export default FriendsPageWide;
