import React from 'react';

import FormInput from '../FormInput';
import FormSelect from '../FormSelect';

import BaseProps from '../../typing/BaseProps';
import SelectError, { Option } from '../FormSelect/types';
import cn from '../../helpers/cn';
import toFixedNumString from '../../helpers/toFixedNumString';
import I18N from '../../helpers/i18n';
import globalKeyset from '../../i18n';
import localKeyset from './i18n';
import monthLength, { monthSequence } from './monthsMeta';

import './index.css';
import InputError from '../FormInput/types';

interface Props extends BaseProps {

};

interface State {
  submitting: boolean;
  errors: {
    [inputName: string]: boolean;
  };
  canBeSubmitted: boolean;

  firstName: string;
  lastName: string;
  birthday: {
    day: string;
    month: string;
    year: string;
  };
};

class SignUpForm extends React.Component<Props, State> {
  private dayOptions: Option[];
  private monthOptions: Option[];
  private yearOptions: Option[];

  constructor(props: Props) {
    super(props);
    this.state = {
      submitting: false,
      errors: {
        firstName: true,
        lastName: true,
        day: true,
        month: true,
        year: true
      },
      canBeSubmitted: false,

      firstName: '',
      lastName: '',
      birthday: {
        day: '',
        month: '',
        year: ''
      }
    };
    
    this.dayOptions = [];
    for (let i = 1; i <= 31; i++) {
      this.dayOptions.push({
        value: i.toString(),
        text: i.toString()
      });
    }

    this.monthOptions = Object.keys(monthLength).map(month => {
      const firstLetter = I18N(globalKeyset, month)[0];
      return {
        value: month,
        text: firstLetter.toUpperCase() + I18N(globalKeyset, month).slice(1)
      };
    });

    this.yearOptions = [];
    for (let i = 2019; i > 1919; i--) {
      this.yearOptions.push({
        value: i.toString(),
        text: i.toString()
      });
    }
  }

  handleFirstName = (value: string) => {
    this.setState({
      firstName: value
    });
  }

  handleLastName = (value: string) => {
    this.setState({
      lastName: value
    });
  }

  handleDay = (value: string) => {
    const { birthday } = this.state;
    this.setState({
      birthday: {
        ...birthday,
        day: typeof value === 'string' ?
          toFixedNumString(value, 2) :
          value
      }
    });
  }

  handleMonth = (value: string) => {
    const { birthday } = this.state;
    this.setState({
      birthday: {
        ...birthday,
        month: toFixedNumString(
          monthSequence.findIndex(month => month === value) + 1,
          2
        )
      }
    });
  }

  handleYear = (value: string) => {
    const { birthday } = this.state;
    this.setState({
      birthday: {
        ...birthday,
        year: value
      }
    });
  }

  handleBeforeSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.setState({
      submitting: true
    });
  }

  handleValidation = (name: string, result: true | InputError | SelectError) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: !(result === true)
      }
    }, () => {
      const {
        firstName,
        lastName,
        day,
        month,
        year
      } = this.state.errors;
      const errors = [firstName, lastName, day, month, year];

      if (errors.every(error => error === false)) {
        console.log('submit');
      }
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!prevState.submitting && this.state.submitting) {
      this.setState({
        submitting: false
      });
    }
  }

  submit = () => {

  }

  render() {
    const cSignUpForm = cn('SignUpForm', this.props.className);

    return (
      <div className={cSignUpForm}>
        <h3 className="SignUpForm-Title">{I18N(localKeyset, 'title')}</h3>
        <h5 className="SignUpForm-Subtitle">{I18N(localKeyset, 'subtitle')}</h5>
        <form>
          <FormInput
            onChange={this.handleFirstName}
            type="text"
            name="firstName"
            validation={{
              required: true,
              maxLength: 50
            }}
            forceValidation={this.state.submitting}
            onValidation={this.handleValidation}
            placeholder={I18N(localKeyset, 'first-name')}
            className="SignUpForm-Input"
          />
          <FormInput
            onChange={this.handleLastName}
            type="text"
            name="lastName"
            validation={{
              required: true,
              maxLength: 50
            }}
            forceValidation={this.state.submitting}
            onValidation={this.handleValidation}
            placeholder={I18N(localKeyset, 'last-name')}
            className="SignUpForm-Input"
          />

          <div className="SignUpForm-Birthday">
            <FormSelect
              name="day"
              options={this.dayOptions}
              onChange={this.handleDay}
              required
              forceValidation={this.state.submitting}
              onValidation={this.handleValidation}
              placeholder={I18N(localKeyset, 'birthday-day')}
              className="SignUpForm-DaySelect"
            />
            <FormSelect
              name="month"
              options={this.monthOptions}
              onChange={this.handleMonth}
              required
              forceValidation={this.state.submitting}
              onValidation={this.handleValidation}
              placeholder={I18N(localKeyset, 'birthday-month')}
              className="SignUpForm-MonthSelect"
            />
            <FormSelect
              name="year"
              options={this.yearOptions}
              onChange={this.handleYear}
              required
              forceValidation={this.state.submitting}
              onValidation={this.handleValidation}
              placeholder={I18N(localKeyset, 'birthday-year')}
              className="SignUpForm-YearSelect"
            />
          </div>

          <button className="SignUpForm-Submit" onClick={this.handleBeforeSubmit}>
            {I18N(localKeyset, 'continue-sign-up')}
          </button>
        </form>
      </div>
    );
  }
};

export default SignUpForm;
