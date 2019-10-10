import React from 'react';
import { withRouter, RouteProps } from 'react-router';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../../server';
import { AppState, AppActions } from '../../store';
import Messages from '../Messages';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';
import { MessagesPageMeta } from '../../store/page/types';
import UserState from '../../store/user/types';
import { changeMeta } from '../../store/page/actions';

type Props = BaseProps & ConnectedStateProps & ConnectedDispatchProps;

interface State {
  interlocutors: User[];
};

class MessagesPage extends React.Component<Props & RouteProps, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      interlocutors: []
    };
  }

  async componentDidMount() {
    const {
      user,
      changeMeta
    } = this.props;

    const interlocutorsId = Object.keys(user.connections).filter(uid =>
      user.connections[uid].messages.list.length
    );

    changeMeta({
      loadingDialogs: true
    });

    const interlocutors = await fetchUsers(interlocutorsId);

    changeMeta({
      loadingDialogs: false
    });

    this.setState({
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
            loading={Boolean(this.props.pageMeta.loadingDialogs)}
          />
        </div>
        <div className="page-column-thin">

        </div>
      </div>
    );
  }
};

interface ConnectedStateProps {
  pageMeta: MessagesPageMeta;
  user: UserState;
};

interface ConnectedDispatchProps {
  changeMeta: (meta: MessagesPageMeta) => void;
}

const mapStateToProps = (state: AppState) => ({
  pageMeta: state.page.meta,
  user: state.user
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  changeMeta: bindActionCreators(changeMeta, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesPage));
