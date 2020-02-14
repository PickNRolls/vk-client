import * as React from 'react';
import { ThunkDispatch, } from 'redux-thunk';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import Form from './Form';

import SubmitValues from '../step2/types';
import I18N from '../../../helpers/i18n';
import localKeyset from './i18n';

import css from './Step2.css';

interface OwnProps {
  onFinish: (step: 2) => void;
}

type Props =
  & OwnProps;

class SignUpPageStep2 extends React.Component<Props> {
  handleSubmit = (values: SubmitValues) => {
    this.handleFinish();
  }

  handleFinish() {
    this.props.onFinish(2);
  }

  render() {
    return (
      <div className="SignUpPage-StepWrapper SignUpPage-Step2">
        <h4 className={css.Title}>
          {I18N(localKeyset, 'title')}
        </h4>

        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUpPageStep2;
