import React from 'react';
import { connect } from 'react-redux';

import IUser from './typing/IUser';
import { AppState, AppActions } from './store';

import AppHeader from './components/AppHeader';
import { requestUser } from './store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

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
      </>
    );
  }
}

interface ConnectedStateProps {
  user: IUser;
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
