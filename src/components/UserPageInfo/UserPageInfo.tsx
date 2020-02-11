import * as React from 'react';

import User from 'typing/User';
import globalKeyset from 'i18n';
import localKeyset from './i18n';
import I18N from 'helpers/i18n';
import cn from 'classnames';

import UserInfoField from 'components/UserInfoField';
import UserInfoGroup from 'components/UserInfoGroup';

import css from './UserPageInfo.css';

interface Props {
  user: User;
  isPageMine: boolean;
  className?: string;
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
    const cUserPageInfo = cn(css.UserPageInfo, this.props.className);

    return (
      <div className={cUserPageInfo}>
        <div className={css.Top}>
          <span className={css.Name}>
            {user.fullName}
          </span>
          <span className={css.Online}>
            {user.online ? 'Online' : 'Offline'}
          </span>
        </div>

        {
        user.status
          ? <span className={css.Status}>
              {user.status}
            </span>

          : null
        }


        <div className={css.AlwaysVisible}>
          <UserInfoField label={I18N(localKeyset, 'birthday')} value={user.additionalInfo.birthday}/>
        </div>

        <button
          onClick={this.handleExpandClick}
          className={css.DetailsButton}>
          {this.state.expanded
            ? I18N(localKeyset, 'details-button_on')
            : I18N(localKeyset, 'details-button_off')
          }
        </button>

        {this.state.expanded
          ? (
          <div className={css.Details}>
            {user.additionalInfo.languages &&
              <UserInfoGroup
                isPageMine={isPageMine}
                title={I18N(localKeyset, 'basic-info')}
                className={css.Group}>
                <UserInfoField
                  label={I18N(localKeyset, 'languages')}
                  value={user.additionalInfo.languages.map(lang => I18N(globalKeyset, lang)).join(', ')}
                />
              </UserInfoGroup>
            }

            <UserInfoGroup
              isPageMine={isPageMine}
              title={I18N(localKeyset, 'education-info')}
              className={css.Group}
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
