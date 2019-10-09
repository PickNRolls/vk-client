import React from 'react';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface Props extends BaseProps {
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];

  onChange?(event: React.ChangeEvent<HTMLInputElement>, value: string): void;

  input?: {
    className: React.HTMLAttributes<HTMLInputElement>['className'];
  };

  button?: {
    className: React.HTMLAttributes<HTMLButtonElement>['className'];
  };
};

interface IState {
  value: string;
};

class ClearInput extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      value
    });

    const { onChange } = this.props;
    onChange && onChange(event, value);
  }

  handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      value: ''
    });
  }

  render() {
    const cClearInput = cn('ClearInput', this.props.className);
    const { type = 'text', placeholder, input, button } = this.props;

    const inputClassName = input && input.className
      ? input.className + ' ClearInput-Input'
      : 'ClearInput-Input';
    const buttonClassName = button && button.className
      ? button.className + ' ClearInput-Button'
      : 'ClearInput-Button';

    return (
      <div className={cClearInput}>
        <input
          type={type}
          placeholder={placeholder}
          className={inputClassName}
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button className={buttonClassName} onClick={this.handleClear}>
          &#215;
      </button>
      </div>
    );
  }
};

export default ClearInput;
