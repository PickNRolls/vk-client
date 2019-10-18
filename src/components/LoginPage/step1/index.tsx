import React from 'react';

import SignUpForm from './SignUpForm';

import BaseProps from '../../../typing/BaseProps';
import { SubmitValues } from './SignUpForm/types';

interface Props extends BaseProps {
  onFinish: (step: 1) => void;
};

class LoginPageStep1 extends React.Component<Props> {
  handleSubmit = (submittingData: SubmitValues) => {
    console.log(submittingData);
    this.handleFinish();
  }

  handleFinish() {
    this.props.onFinish(1);
  }

  render() {
    return (
      <div className="SignUpPage-RightColumn">
        <SignUpForm
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LoginPageStep1;
