import * as React from 'react';
import { withRouter, RouteProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, AppActions } from '../../store';
import UserState from '../../store/user/types';
import { change as changeTitle } from '../../store/document/title/actions';
import Messages from '../Messages';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from 'classnames';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

type Props =
  & BaseProps
  & ConnectedStateProps
  & ConnectedDispatchProps;

interface State {
  interlocutors: User[];
  loadingDialogs: boolean;
};

class MessagesPage extends React.Component<Props & RouteProps, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      interlocutors: [],
      loadingDialogs: true
    };
  }

  async componentDidMount() {
    //   const {
    //     user
    //   } = this.props;

    this.props.changeTitle(I18N(localKeyset, 'page-title'));

    //   const interlocutorsId = Object.keys(user.connections).filter(uid =>
    //     user.connections[uid].messages.list.length
    //   );

    //   const interlocutors = await fetchUsers(interlocutorsId);

    //   this.setState({
    //     loadingDialogs: false,
    //     interlocutors
    //   });
  }

  render() {
    const propsClass = cn(this.props.className, 'clearfix');
    const cMessagesPage = cn(propsClass);

    return (
      <div className={cMessagesPage}>
        <div className="page-column-wide">
          <Messages
            user={this.props.user}
            interlocutors={this.state.interlocutors}
            loading={!!this.state.loadingDialogs}
          />
        </div>
        <div className="page-column-thin">

        </div>
      </div>
    );
  }
};

interface ConnectedStateProps {
  user: UserState;
};

interface ConnectedDispatchProps {
  changeTitle: (title: string) => void;
}

const mapStateToProps = (state: AppState) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  changeTitle
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesPage));
