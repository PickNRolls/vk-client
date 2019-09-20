import React from 'react';

import { IUserAdditionalInfo } from '../../typing/IUser';
import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  label: keyof IUserAdditionalInfo;
  data: IUserAdditionalInfo[this['label']];
};

interface IState {

};

class UserInfoField<K> extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cUserInfoField = cn('UserInfoField', this.props.className);
    return (
      <span className={cUserInfoField}>
        <span className="UserInfoField-Key">{this.props.label}</span>
        <span className="UserInfoField-Value">{this.props.data}</span>
      </span>
    );
  }
};

export default UserInfoField;
