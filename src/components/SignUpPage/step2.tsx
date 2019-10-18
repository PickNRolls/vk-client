import React from 'react';

import FormInput from '../FormInput';

import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './step2.css';

interface Props {
  onFinish: (step: 2) => void;
};

class SignUpStep2 extends React.Component <Props> {
  handleBeforeSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="SignUpPage-Step2">
        <h4 className="SignUpPage-Step2Title">
          {I18N(localKeyset, 'step2-title')}
        </h4>

        <form>
          <FormInput
            type="email"
            validation={{
              required: true
            }}
            placeholder={I18N(localKeyset, 'step2-email')}
            name="email"
            className="SignUpPage-Step2Input"
          />

          <FormInput
            // type="password"
            validation={{
              required: true
            }}
            placeholder={I18N(localKeyset, 'step2-password')}
            name="password"
            className="SignUpPage-Step2Input"
          />

          <button className="SignUpPage-Button" onClick={this.handleBeforeSubmit}>
            
          </button>
        </form>
      </div>
    );
  }
};

export default SignUpStep2;
