import React from 'react';

import Form from './Form';

import SubmitValues from '../step2/types';
import I18N from '../../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface Props {
  onFinish: (step: 2) => void;
};

class SignUpStep2 extends React.Component<Props> {
  handleSubmit = (values: SubmitValues) => {
    console.log(values);
    this.handleFinish();
  }

  handleFinish() {
    this.props.onFinish(2);
  }

  render() {
    return (
      <div className="SignUpPage-Step2">
        <h4 className="SignUpPage-Step2Title">
          {I18N(localKeyset, 'title')}
        </h4>

        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
};

export default SignUpStep2;
