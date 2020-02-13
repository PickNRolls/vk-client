import * as React from 'react';
import { ThunkDispatch, } from 'redux-thunk';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import Form from './Form';

import SubmitValues from '../step2/types';
import I18N from '../../../helpers/i18n';
import localKeyset from './i18n';

import css from './Step2.css';
import { IntermediateData, } from '../../../store/signUpProgress/types';
import { saveIntermediateData, } from '../../../store/signUpProgress/actions';
import { AppActions, } from '../../../store';

interface OwnProps {
  onFinish: (step: 2) => void;
}

type Props =
  & OwnProps
  & ConnectedDispatchProps;

class SignUpPageStep2 extends React.Component<Props> {
  handleSubmit = (values: SubmitValues) => {
    this.props.saveData(values);
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

interface ConnectedDispatchProps {
  saveData: (data: IntermediateData) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  saveData: bindActionCreators(saveIntermediateData, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpPageStep2);
