import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import SignUpForm from '../SignUpForm';

import { AppActions } from '../../store';
import { SignUpPayload } from '../../store/auth/types';
import { signUp } from '../../store/auth/actions';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

type Props =
  & ConnectedDispatchProps
  & BaseProps;

interface State {

};

class SignUpPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (data: {firstName: string; lastName: string; birthday: Date}) => {
    this.props.signUp(data);
  }

  render() {
    const cSignUpPage = cn('SignUpPage', this.props.className);
    document.title = I18N(localKeyset, 'document-title');

    return (
      <div className={cSignUpPage}>
        <div className="SignUpPage-RightColumn">
          <SignUpForm
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
};

interface ConnectedStateProps {

};

interface ConnectedDispatchProps {
  signUp: (payload: SignUpPayload) => void;
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  signUp: bindActionCreators(signUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
