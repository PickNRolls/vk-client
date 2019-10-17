import React from 'react';

import BaseProps from '../../../../typing/BaseProps';
import cn from '../../../../helpers/cn';

import { Option } from './types';
import SelectOption from './Option';

import './Select.css';

export interface Props extends BaseProps {
  placeholder: string;
  options: Option[];
  
  error?: string;
  value?: string;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
};

interface State {
  value: string,
  expanded: boolean;
};

class FormSelect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value || '',
      expanded: false
    };
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
    });

    onChange && onChange(value);
  }

  handleFocusEvent = (event: React.FocusEvent) => {
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
        this.setState({
          expanded: false
        });
        onBlur && onBlur(value);
        break;
      }

      default: break;
    }
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
  }

  render() {
    const cFormSelect = cn('SignUpForm-Select', this.props.className, {
      expanded: this.state.expanded,
      filled: this.state.value.length !== 0,
      error: !!this.props.error
    });

    const selectedOption = this.props.options.find(option => (
      option.value === this.state.value
    ));

    const selectedOptionText = selectedOption && selectedOption.text;

    return (
      <div
        tabIndex={0}
        onClick={this.handleSelectClick}
        onFocus={this.handleFocusEvent}
        onBlur={this.handleFocusEvent}
        className={cFormSelect}
      >
        <span className="SignUpForm-SelectValue">
          {this.state.value.length ?
            selectedOptionText :
            this.props.placeholder
          }
        </span>

        {
          this.state.expanded &&
          <ul className="SignUpForm-SelectList">
            {
              this.props.options.map(option => (
                <SelectOption
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
