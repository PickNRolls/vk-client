import * as React from 'react';
import { connect, } from 'react-redux';
import { ThunkDispatch, } from 'redux-thunk';

import Step1Component from './step1';
import Step2Component from './step2';

import cn from 'classnames';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

interface OwnProps {
  className?: string;
}

type Props =
  & OwnProps;

const INFO_STEP = 1;
const EMAIL_PASSWORD_STEP = 2;
class SignUpPage extends React.Component<Props> {
  handleStepFinish = (step: number) => {
    // const {
    //   signUp,
    //   goToStep,
    //   intermediateData,
    // } = this.props;

    // if (step === EMAIL_PASSWORD_STEP) {
    //   const signUpPayload = intermediateData as SignUpPayload;
    //   signUp(signUpPayload);
    //   return;
    // }

    // goToStep(step + 1);
    console.log('handleStepFinish');
  }

  render() {
    const cSignUpPage = cn(this.props.className);

    return (
      <div className={cSignUpPage}>
        hi
      </div>
    );
  }
}

export default SignUpPage;
