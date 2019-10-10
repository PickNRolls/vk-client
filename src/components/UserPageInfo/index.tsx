import React from 'react';

import User from '../../typing/User';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import globalKeyset from '../../i18n';
import localKeyset from './i18n';
import I18N from '../../helpers/i18n';

import UserInfoField from '../UserInfoField';
import UserInfoGroup from '../UserInfoGroup';

import './index.css';

interface Props extends BaseProps {
  user: User;
  isPageMine: boolean;
};

interface State {
  expanded: boolean;
};

class UserPageInfo extends React.Component<Props, State> {
  constructor(props: Props) {
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
    const { user, isPageMine } = this.props;
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
          <UserInfoField label={I18N(localKeyset, 'birthday')} value={user.additionalInfo.birthday}/>
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
            <UserInfoGroup
              isPageMine={isPageMine}
              title={I18N(localKeyset, 'basic-info')}
              className="UserPageInfo-Group">
              <UserInfoField
                label={I18N(localKeyset, 'languages')}
                value={user.additionalInfo.languages.map(lang => I18N(globalKeyset, lang)).join(', ')}
              />
            </UserInfoGroup>

            <UserInfoGroup
              isPageMine={isPageMine}
              title={I18N(localKeyset, 'education-info')}
              className="UserPageInfo-Group"
            />
          </div>
          )
          : null
        }
      </div>
    );
  }
};

export default UserPageInfo;
