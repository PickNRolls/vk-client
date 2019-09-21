import React from 'react';

import IUser from '../../typing/IUser';
import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';
import globalKeyset from '../../i18n';
import localKeyset from './i18n';
import I18N from '../../helpers/i18n';

import UserInfoField from '../UserInfoField';

import './index.css';

interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {
  expanded: boolean;
};

class UserPageInfo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { user } = this.props;
    const birthdayDay = +user.additionalInfo.birthday.slice(0, 2);
    const cUserPageInfo = cn('UserPageInfo', this.props.className);

    return (
      <div className={cUserPageInfo}>
        <div className="UserPageInfo-Top">
          <span className="UserPageInfo-Name">
            {user.fullName}
          </span>
          <span className="UserPageInfo-Online">
            {user.online ? 'Online' : 'Offline'}
          </span>
        </div>

        {
        user.status
          ? <span className="UserPageInfo-Status">
              {user.status}
            </span>

          : null
        }


        <div className="UserPageInfo-AlwaysVisible">
          <UserInfoField
            label={'birthday'}
            data={`${birthdayDay} ${I18N(globalKeyset, 'march')}`}
          />
        </div>

        <button
          onClick={this.handleExpandClick}
          className="UserPageInfo-DetailsButton">
          {this.state.expanded
            ? I18N(localKeyset, 'details-button_on')
            : I18N(localKeyset, 'details-button_off')
          }
        </button>

        {this.state.expanded
          ? (
          <div className="UserPageInfo-Details">
            
          </div>
          )
          : null
        }
      </div>
    );
  }
};

export default UserPageInfo;
