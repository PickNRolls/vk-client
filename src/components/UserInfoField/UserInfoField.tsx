import * as React from 'react';

import cn from 'classnames';

import css from './UserInfoField.css';

export interface Props {
  label: string;
  value: string;
  className?: string;
}
interface State {

};

const UserInfoField: React.FC<Props> = props => {
  const cUserInfoField = cn(css.UserInfoField, props.className);
  return (
    <span className={cUserInfoField}>
      <span className={css.Label}>{props.label}:</span>
      <span className={css.Value}>{props.value}</span>
    </span>
  );
};

export default UserInfoField;
