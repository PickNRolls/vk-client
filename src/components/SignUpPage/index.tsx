import React from 'react';

import SignUpForm from '../SignUpForm';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface Props extends BaseProps {

};

interface State {

};

class SignUpPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cSignUpPage = cn('SignUpPage', this.props.className);
    document.title = I18N(localKeyset, 'document-title');

    return (
      <div className={cSignUpPage}>
        <div className="SignUpPage-RightColumn">
          <SignUpForm />
        </div>
      </div>
    );
  }
};

export default SignUpPage;
