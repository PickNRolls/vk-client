import * as React from 'react';
import css from './Dropdown.css';

interface Props {

}

const DropdownItem: React.FC<Props> = props => {
  return (
    <div className={css.Item}>
      {props.children}
    </div>
  );
};

export default DropdownItem;
