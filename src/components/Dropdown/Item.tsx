import * as React from 'react';

interface Props {

};

const DropdownItem: React.FC<Props> = props => {
  return (
    <div className="Dropdown-Item">
      {props.children}
    </div>
  );
};

export default DropdownItem;
