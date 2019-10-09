import React from 'react';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

import './index.css';

export interface IProps extends BaseProps {
  label: string;
  value: string;
}
interface IState {

};

const UserInfoField: React.FC<IProps> = props => {
  const cUserInfoField = cn('UserInfoField', props.className);
  return (
    <span className={cUserInfoField}>
      <span className="UserInfoField-Label">{props.label}:</span>
      <span className="UserInfoField-Value">{props.value}</span>
    </span>
  );
};

export default UserInfoField;
