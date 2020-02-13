import * as React from 'react';

import cn from 'classnames';
import I18N from 'helpers/i18n';
import localKeyset from './i18n';

import css from './UserInfoGroup.css';

interface Props {
  title: string;
  isPageMine: boolean;
  className?: string;
}

interface State {

}

class UserInfoGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cUserInfoGroup = cn(css.UserInfoGroup, this.props.className);
    return (
      <div className={cUserInfoGroup}>
        <span className={css.Title}>
          {this.props.title}
        </span>

        {
          this.props.isPageMine && (
            <button className={css.Edit}>
              {I18N(localKeyset, 'edit')}
            </button>
          )
        }

        {this.props.children
          ? this.props.children
          : (
            <span className={css.NoInfo}>
              {I18N(localKeyset, 'no-information')}
            </span>
          )
        }
      </div>
    );
  }
}

export default UserInfoGroup;
