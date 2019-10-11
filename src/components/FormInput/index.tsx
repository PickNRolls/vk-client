import React from 'react';

import BaseProps from '../../typing/BaseProps';
import Error, { InputErrorType as ErrorType } from './types';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface Props extends BaseProps {
  placeholder?: string;
  type?: 'email' | 'text';
  name: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  forceValidation?: boolean;

  onValidation?: (name: string, result: Error | true) => void;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
};

interface State {
  value: string;
  error?: ErrorType;
};

class FormInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      error: undefined
    };
  }

  validate() {
    const { validation, type, onValidation } = this.props;
    if (!validation) {
      return true;
    }

    const { value } = this.state;
    let error: ErrorType | undefined = undefined;

    if (validation.maxLength && value.length > validation.maxLength) {
      error = 'maxLength';
    }

    if (validation.minLength && value.length < validation.minLength) {
      error = 'minLength';
    }
    
    switch (type) {
      case 'text': {
        const textRegExp = /[^a-zA-Zа-яА-ЯёЁ]/;
        if (value.match(textRegExp) !== null) {
          error = 'type';
        }
        break;
      }

      default: break;
    }

    if (validation.required && !value) {
      error = 'required';
    }

    if (onValidation) {
      if (error) {
        onValidation(this.props.name, {
          type: error,
          message: I18N(localKeyset, error)
        })
      } else {
        onValidation(this.props.name, true);
      }
    }

    this.setState({
      error
    });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;

    this.setState({
      value
    }, () => {
      this.validate();
      onChange && onChange(value);
    });
  }

  handleBlur = () => {
    const { onBlur } = this.props;
    const { value } = this.state;

    this.validate();

    onBlur && onBlur(value);
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.forceValidation && this.props.forceValidation) {
      this.validate();
    }
  }

  render() {
    const cFormInput = cn('FormInput', this.props.className, {
      error: !!this.state.error
    });
    const { placeholder } = this.props;
    const { error } = this.state;

    return (
      <span className={cFormInput}>
        <input
          className="FormInput-Input"
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />

        <span className="FormInput-Error">
          {error ? I18N(localKeyset, error) : ''}
        </span>
      </span>
    );
  }
};

export default FormInput;
