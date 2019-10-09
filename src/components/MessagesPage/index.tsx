import React from 'react';

import { fetchUser } from '../../server';
import Messages from '../Messages';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface IProps extends BaseProps {
  user: User;
};

interface IState {
  interlocutors: User[];
};

class MessagesPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      interlocutors: []
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const interlocutorsId = Object.keys(user.connections).filter(uid =>
      user.connections[uid].messages.list.length
    );

    Promise.all(interlocutorsId.map(fetchUser))
      .then(users => this.setState({
        interlocutors: users
      }));
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
          />
        </div>
        <div className="page-column-thin">

        </div>
      </div>
    );
  }
};

export default MessagesPage;
