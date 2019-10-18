import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Step1Component from './step1';
import Step2Component from './step2';

import { AppActions, AppState } from '../../store';
import { goToStep } from '../../store/signUpProgress/actions';
import { change as changeTitle } from '../../store/document/title/actions';
import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

type Props =
  & ConnectedStateProps
  & ConnectedDispatchProps
  & BaseProps;

class SignUpPage extends React.Component<Props> {
  handleStepFinish = (step: number) => {
    this.props.goToStep(step + 1);
  }

  componentDidMount() {
    this.props.changeTitle(I18N(localKeyset, 'document-title'));
  }

  render() {
    const cSignUpPage = cn('SignUpPage', this.props.className);

    let currentStepComponent;

    switch (this.props.step) {
      default:
      case 1: {
        currentStepComponent = <Step1Component onFinish={this.handleStepFinish} />;
        break;
      }

      case 2: {
        currentStepComponent = <Step2Component onFinish={this.handleStepFinish} />;
        break;
      }

      case 3: {
        currentStepComponent = <div>регистрация завершена</div>;
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
};

interface ConnectedDispatchProps {
  goToStep: (step: number) => void;
  changeTitle: (title: string) => void;
};

const mapStateToProps = (state: AppState) => ({
  step: state.signUpProgress.step
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  goToStep: (step: number) => dispatch(goToStep(step)),
  changeTitle: (title: string) => dispatch(changeTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
