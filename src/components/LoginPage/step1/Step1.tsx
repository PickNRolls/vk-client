import * as React from 'react';
import { ThunkDispatch, } from 'redux-thunk';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import SignUpForm from './SignUpForm';

import { SubmitValues, } from './SignUpForm/types';
import css from '../LoginPage.css';

interface OwnProps {
  onFinish: (step: 1) => void;
}

type Props =
  & OwnProps;

class SignUpPageStep1 extends React.Component<Props> {
  handleSubmit = (submittingData: SubmitValues) => {
    this.handleFinish();
  }

  handleFinish() {
    this.props.onFinish(1);
  }

  render() {
    return (
      <div className={css.RightColumn}>
        <SignUpForm
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignUpPageStep1;
