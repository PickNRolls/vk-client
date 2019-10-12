import React from 'react';
import { withRouter, RouteProps } from 'react-router';
import { connect } from 'react-redux';

import { fetchUsers } from '../../server';
import { AppState } from '../../store';
import Messages from '../Messages';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';
import UserState from '../../store/user/types';

type Props = BaseProps & ConnectedStateProps;

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
    const {
      user
    } = this.props;

    const interlocutorsId = Object.keys(user.connections).filter(uid =>
      user.connections[uid].messages.list.length
    );

    const interlocutors = await fetchUsers(interlocutorsId);

    this.setState({
      loadingDialogs: false,
      interlocutors
    });
  }

  render() {
    const propsClass = this.props.className ? this.props.className + ' clearfix' : 'clearfix';
    const cMessagesPage = cn('MessagesPage', propsClass);
    document.title = I18N(localKeyset, 'page-title');

    return (
      <div className={cMessagesPage}>
        <div className="page-column-wide">
          <Messages
            user={this.props.user}
            interlocutors={this.state.interlocutors}
            loading={Boolean(this.state.loadingDialogs)}
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


const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default withRouter(connect(
  mapStateToProps
)(MessagesPage));
