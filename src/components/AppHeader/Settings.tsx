import React from 'react';

import Dropdown from '../Dropdown';
import SettingsItem from './SettingsItem';

import User from '../../typing/User';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface Props {
  user: User;
};

const AppHeaderSettings: React.FC<Props> = props => {
  const {
    user
  } = props;

  return (
    <Dropdown
      className="AppHeader-Dropdown"
      switcher={
        <>
          <span className="AppHeader-DropdownName">
            {user.firstName}
          </span>
          <span
            style={{ backgroundImage: `url(${user.avatar})` }}
            className="AppHeader-DropdownPhoto"
          />
          <span className="AppHeader-DropdownArrow" />
        </>
      }

      content={
        <ul className="AppHeader-DropdownList">
          <SettingsItem
            url={`/id${user.id}`}
            text={I18N(localKeyset, 'my-page')}
          />
          <span className="AppHeader-DropdownDivider" />
          <SettingsItem
            url="/logout"
            text={I18N(localKeyset, 'log-out')}
          />
        </ul>
      }
    />
  );
};

export default AppHeaderSettings;
