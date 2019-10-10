import React from 'react';
import { connect } from 'react-redux';
import { AppActions } from './store';
import { requestUser } from './store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

interface AppProps {

};

type Props = AppProps & ConnectedDispatchProps;

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.requestUser('00000000');
  }

  render() {
    return (
      <>
        <AppHeader />
        <Main />
      </>
    );
  }
}

interface ConnectedDispatchProps {
  requestUser: (uid: string) => void;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  requestUser: bindActionCreators(requestUser, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(App);
