import * as React from 'react';

import cn from '../../helpers/cn';

import './index.css';

export interface Props {
  label: string;
  value: string;
  className?: string;
}
interface State {

};

const UserInfoField: React.FC<Props> = props => {
  const cUserInfoField = cn('UserInfoField', props.className);
  return (
    <span className={cUserInfoField}>
      <span className="UserInfoField-Label">{props.label}:</span>
      <span className="UserInfoField-Value">{props.value}</span>
    </span>
  );
};

export default UserInfoField;
