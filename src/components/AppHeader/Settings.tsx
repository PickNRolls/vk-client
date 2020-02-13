import * as React from 'react';

import Dropdown from 'components/Dropdown';
import SettingsItem from './SettingsItem';

import User from 'typing/User';
import I18N from 'helpers/i18n';
import localKeyset from './i18n';
import css from './AppHeader.css';

interface Props {
  user: User;
}

const AppHeaderSettings: React.FC<Props> = props => {
  const {
    user,
  } = props;

  return (
    <Dropdown
      className={css.Dropdown}
      render={payload => {
        const { switcher, content, } = payload;
        const Switcher = switcher.Component;
        const Content = content.Component;

        return <>
          <Switcher className={css.DropdownSwitcher} onClick={switcher.onClick}>
            <span className={css.DropdownName}>
              {user.firstName}
            </span>
            <span
              style={{ backgroundImage: `url(${user.avatar})`, }}
              className={css.DropdownPhoto}
            />
            <span className={css.DropdownArrow} />
          </Switcher>
          <Content className={css.DropdownContent} onClick={content.onClick}>
            <ul className={css.DropdownList}>
              <SettingsItem
                url={`/id${user.id}`}
                text={I18N(localKeyset, 'my-page')}
              />
              <span className={css.DropdownDivider} />
              <SettingsItem
                url="/logout"
                text={I18N(localKeyset, 'log-out')}
              />
            </ul>
          </Content>
        </>;
      }}
    />
  );
};

export default AppHeaderSettings;
