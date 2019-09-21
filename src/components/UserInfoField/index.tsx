import React from 'react';

import { IUserAdditionalInfo } from '../../typing/IUser';
import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface IProps extends IBaseProps {
  label: keyof IUserAdditionalInfo;
  data: IUserAdditionalInfo[this['label']];
};

interface IState {

};

class UserInfoField extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cUserInfoField = cn('UserInfoField', this.props.className);
    return (
      <span className={cUserInfoField}>
        <span className="UserInfoField-Label">{I18N(localKeyset, this.props.label)}:</span>
        <span className="UserInfoField-Value">{this.props.data}</span>
      </span>
    );
  }
};

export default UserInfoField;
