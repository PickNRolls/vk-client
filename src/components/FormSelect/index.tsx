import React from 'react';

import FormSelectOption from '../FormSelectOption';

import BaseProps from '../../typing/BaseProps';
import Error, {
  Option,
  SelectErrorType as ErrorType
} from './types';
import cn from '../../helpers/cn';
import I18N from '../../helpers/i18n';
import localKeyset from './i18n';

import './index.css';

interface Props extends BaseProps {
  placeholder: string;
  name: string;
  options: Option[];
  forceValidation?: boolean;

  required?: boolean;

  onValidation?: (name: string, result: true | Error) => void;
  onChange?: (value: string) => void;
};

interface State {
  error?: ErrorType;
  value: string,
  expanded: boolean;
};

class FormSelect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      expanded: false
    };
  }

  validate() {
    const { required, onValidation } = this.props;
    const { value } = this.state;

    let error: ErrorType | undefined;

    if (required && !value) {
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

  handleSelectClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleOptionClick = (event: React.MouseEvent, value: string) => {
    event.stopPropagation();

    const { onChange } = this.props;

    this.setState({
      value,
      expanded: false
    }, () => {
      this.validate();
      onChange && onChange(value);
    });
  }

  handleBlur = () => {
    this.setState({
      expanded: false
    });
  }

  mixPlaceholderToOptions() {
    const { options } = this.props;
    if (options[0].value === '') return;

    this.props.options.unshift({
      value: '',
      text: this.props.placeholder
    });
  }

  componentDidMount() {
    this.mixPlaceholderToOptions();
  }

  componentDidUpdate(prevProps: Props) {
    this.mixPlaceholderToOptions();
    if (!prevProps.forceValidation && this.props.forceValidation) {
      this.validate();
    }
  }

  render() {
    const cFormSelect = cn('FormSelect', this.props.className, {
      expanded: this.state.expanded,
      filled: this.state.value.length !== 0,
      error: !!this.state.error
    });

    const selectedOption = this.props.options.find(option => (
      option.value === this.state.value
    ));

    const selectedOptionText = selectedOption && selectedOption.text;

    return (
      <div
        tabIndex={0}
        onClick={this.handleSelectClick}
        onBlur={this.handleBlur}
        className={cFormSelect}
        >
          <span className="FormSelect-Value">
            {this.state.value.length ?
              selectedOptionText :
              this.props.placeholder
            }
          </span>

          {
            this.state.expanded &&
            <ul className="FormSelect-List">
              {
                this.props.options.map(option => (
                  <FormSelectOption
                    value={option.value}
                    text={option.text}
                    onClick={this.handleOptionClick}
                    key={option.value}
                  />
                ))
              }
            </ul>
          }
      </div>
    );
  }
};

export default FormSelect;
