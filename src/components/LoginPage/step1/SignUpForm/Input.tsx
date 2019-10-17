import React from 'react';

import cn from '../../../../helpers/cn';

import './Input.css';

export interface Props {
  error?: string;
  placeholder?: string;
  name?: string;
  value?: string;

  onFocus?: (value: string) => void;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
};

interface State {
  value: string;
};

class FormInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;

    this.setState({
      value
    });

    onChange && onChange(value);
  }

  handleBlur = (event: React.FocusEvent) => {
    const { onBlur } = this.props;

    onBlur && onBlur(this.state.value);
  }

  handleFocusEvents = (event: React.FocusEvent) => {
    const {
      onBlur,
      onFocus
    } = this.props;
    
    const { value } = this.state;

    switch (event.type) {
      case 'focus': {
        onFocus && onFocus(value);
        break;
      }

      case 'blur': {
        onBlur && onBlur(value);
        break;
      }

      default: break;
    }
  }

  render() {
    const cFormInput = cn('SignUpForm-InputWrapper', undefined, {
      error: !!this.props.error
    });
    const { placeholder } = this.props;

    return (
      <span className={cFormInput} onFocus={this.handleFocusEvents}>
        <input
          className="SignUpForm-Input"
          name={this.props.name}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleFocusEvents}
        />

        <span className="SignUpForm-InputError">
          {this.props.error ? this.props.error : ''}
        </span>
      </span>
    );
  }
};

export default FormInput;
