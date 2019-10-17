import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import SignUpForm from './step1/SignUpForm';

import { AppActions, AppState } from '../../store';
import { SubmitValues } from './step1/SignUpForm/types';
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

  handleSubmit = (data: SubmitValues) => {
    this.props.goToStep(2);
  }

  render() {
    const cSignUpPage = cn('SignUpPage', this.props.className);
    document.title = I18N(localKeyset, 'document-title');

    switch (this.props.step) {
      default:
      case 1: {
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

      case 2: {
        return (
          <div>
            step 2
          </div>
        );
      }
    }
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
