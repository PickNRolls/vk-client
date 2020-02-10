import * as React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown';

import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface Props {
  url: string;
  text: string;
};

const AppHeaderSetting: React.FC<Props> = props => {
  return (
    <Dropdown.Item>
      <li className="AppHeader-DropdownItem">
        <Link to={props.url} className="AppHeader-DropdownLink">
          {props.text}
        </Link>
      </li>
    </Dropdown.Item>
  );
};

export default AppHeaderSetting;
