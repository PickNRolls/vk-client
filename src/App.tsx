import React from 'react';
import { connect } from 'react-redux';
import { AppState, AppActions } from './store';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';
import { requestUser } from './store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import UserState from './store/user/types';

interface AppProps {

};

type Props = AppProps & ConnectedStateProps & ConnectedDispatchProps;

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.requestUser('00000000');
  }

  render() {
    return (
      <>
        <AppHeader />
        <Main
          user={this.props.user}
        />
      </>
    );
  }
}

interface ConnectedStateProps {
  user: UserState;
};

interface ConnectedDispatchProps {
  requestUser: (uid: string) => void;
};

const mapStateToProps = (state: AppState, ownProps: AppProps) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  requestUser: bindActionCreators(requestUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
