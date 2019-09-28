import React from 'react';

import { fetchUser } from '../../server';
import Messages from '../Messages';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface IProps extends IBaseProps {
  user: IUser;
  interlocutorsId: IUser['id'][];
};

interface IState {
  interlocutors: IUser[];
};

class MessagesPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      interlocutors: []
    };
  }

  componentDidMount() {
    Promise.all(this.props.interlocutorsId.map(fetchUser))
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
