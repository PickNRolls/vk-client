import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import SignUpForm from '../SignUpForm';

import { AppActions, AppState } from '../../store';
import { goToStep } from '../../store/signUpProgress/actions';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

type Props =
  & ConnectedStateProps
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
    console.log(this.props.step);
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
  step: number;
};

interface ConnectedDispatchProps {
  goToStep: (step: number) => void;
};

const mapStateToProps = (state: AppState) => ({
  step: state.signUpProgress.step
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  goToStep: (step: number) => dispatch(goToStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
