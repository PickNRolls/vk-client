import * as React from 'react';
import { withRouter, RouteProps, } from 'react-router';
import { Dispatch, } from 'redux';
import { connect, } from 'react-redux';

import Messages from '../Messages';

import User from '../../typing/User';
import cn from 'classnames';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface OwnProps {
  className?: string;
}

type Props =
  & OwnProps;

interface State {
  interlocutors: User[];
  loadingDialogs: boolean;
}

class MessagesPage extends React.Component<Props & RouteProps, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      interlocutors: [],
      loadingDialogs: true,
    };
  }

  async componentDidMount() {
    //   const {
    //     user
    //   } = this.props;

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
            user={{
              firstName: 'misha',
              lastName: 'mish',
              fullName: 'mish misha',
              age: 12,
              id: '0012313',
            }}
            interlocutors={this.state.interlocutors}
            loading={!!this.state.loadingDialogs}
          />
        </div>
        <div className="page-column-thin">

        </div>
      </div>
    );
  }
}

export default MessagesPage;
