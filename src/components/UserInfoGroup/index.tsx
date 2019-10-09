import React from 'react';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface IProps extends BaseProps {
  title: string;
};

interface IState {

};

class UserInfoGroup extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cUserInfoGroup = cn('UserInfoGroup', this.props.className);
    return (
      <div className={cUserInfoGroup}>
        <span className="UserInfoGroup-Title">
          {this.props.title}
        </span>
        <button className="UserInfoGroup-Edit">
          {I18N(localKeyset, 'edit')}
        </button>

        {this.props.children
          ? this.props.children
          : (
            <span className="UserInfoGroup-NoInfo">
              {I18N(localKeyset, 'no-information')}
            </span>
          )
        }
      </div>
    );
  }
};

export default UserInfoGroup;
