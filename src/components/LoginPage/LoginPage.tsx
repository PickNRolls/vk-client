import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Step1Component from './step1';
import Step2Component from './step2';

import { AppActions, AppState } from '../../store';
import { goToStep } from '../../store/signUpProgress/actions';
import { signUp } from '../../store/auth/actions';
import { IntermediateData } from '../../store/signUpProgress/types';
import { change as changeTitle } from '../../store/document/title/actions';
import { SignUpPayload } from '../../store/auth/types';
import BaseProps from '../../typing/BaseProps';
import cn from 'classnames';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

type Props =
  & ConnectedStateProps
  & ConnectedDispatchProps
  & BaseProps;

const INFO_STEP = 1;
const EMAIL_PASSWORD_STEP = 2;
class SignUpPage extends React.Component<Props> {
  handleStepFinish = (step: number) => {
    const {
      signUp,
      goToStep,
      intermediateData
    } = this.props;

    if (step === EMAIL_PASSWORD_STEP) {
      const signUpPayload = intermediateData as SignUpPayload;
      signUp(signUpPayload);
      return;
    }

    goToStep(step + 1);
  }

  componentDidMount() {
    this.props.changeTitle(I18N(localKeyset, 'document-title'));
  }

  render() {
    const cSignUpPage = cn(this.props.className);

    let currentStepComponent;

    switch (this.props.step) {
      default:
      case INFO_STEP: {
        currentStepComponent = <Step1Component onFinish={this.handleStepFinish} />;
        break;
      }

      case EMAIL_PASSWORD_STEP: {
        currentStepComponent = <Step2Component onFinish={this.handleStepFinish} />;
        break;
      }
    }

    return (
      <div className={cSignUpPage}>
        {currentStepComponent}
      </div>
    )
  }
};

interface ConnectedStateProps {
  step: number;
  intermediateData: IntermediateData;
};

interface ConnectedDispatchProps {
  signUp: (payload: SignUpPayload) => void;
  goToStep: (step: number) => void;
  changeTitle: (title: string) => void;
};

const mapStateToProps = (state: AppState) => ({
  step: state.signUpProgress.step,
  intermediateData: state.signUpProgress.intermediateData
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  signUp: (payload: SignUpPayload) => {
    dispatch(signUp(payload))
  },
  goToStep: (step: number) => dispatch(goToStep(step)),
  changeTitle: (title: string) => dispatch(changeTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
