import * as React from 'react';

import cn from 'classnames';

import css from './Input.css';
import { FieldProps } from 'formik';

export interface Props {
  error?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  className?: string;

  onFocus?: (value: string) => void;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
};

interface State {
  value: string;
};

export class FormInput extends React.Component<Props, State> {
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
    const cFormInput = cn(css.InputWrapper, this.props.className, {
      [css.InputWrapper_error]: !!this.props.error
    });
    const { placeholder } = this.props;

    return (
      <span className={cFormInput} onFocus={this.handleFocusEvents}>
        <input
          className={css.Input}
          name={this.props.name}
          type={this.props.type}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleFocusEvents}
        />

        <span className={css.InputError}>
          {this.props.error ? this.props.error : ''}
        </span>
      </span>
    );
  }
};

const FormikInput = ({
  field,
  form: { touched, errors, setFieldTouched, setFieldValue, isValid },
  ...props
}: FieldProps & Props) => {
  return <FormInput
    {...field}
    type={props.type}
    onBlur={() => {
      setFieldTouched(field.name, true);
    }}
    onChange={value => {
      if (!isValid) {
        setFieldTouched(field.name, true);
      }
      setFieldValue(field.name, value);
    }}
    placeholder={props.placeholder}
    error={touched[field.name] && errors[field.name] ?
      errors[field.name] as string : ''
    }
  />;
};

export default FormikInput;
