import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

import { SubmitValues } from './SignUpForm/types';
import { IntermediateData } from '../../../store/signUpProgress/types';
import { AppActions } from '../../../store';
import { saveIntermediateData } from '../../../store/signUpProgress/actions';

interface OwnProps {
  onFinish: (step: 1) => void;
};

type Props =
  & OwnProps
  & ConnectedDispatchProps;

class SignUpPageStep1 extends React.Component<Props> {
  handleSubmit = (submittingData: SubmitValues) => {
    this.props.saveData(submittingData);
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

interface ConnectedDispatchProps {
  saveData: (data: IntermediateData) => void;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  saveData: bindActionCreators(saveIntermediateData, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpPageStep1);
