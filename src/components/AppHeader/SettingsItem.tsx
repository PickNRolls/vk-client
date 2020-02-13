import * as React from 'react';
import { Link, } from 'react-router-dom';

import Dropdown from 'components/Dropdown';
import css from './AppHeader.css';

interface Props {
  url: string;
  text: string;
}

const AppHeaderSetting: React.FC<Props> = props => {
  return (
    <Dropdown.Item>
      <li className={css.DropdownItem}>
        <Link to={props.url} className={css.DropdownLink}>
          {props.text}
        </Link>
      </li>
    </Dropdown.Item>
  );
};

export default AppHeaderSetting;
