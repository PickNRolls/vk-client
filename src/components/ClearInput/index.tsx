import * as React from 'react';

import BaseProps from 'typing/BaseProps';
import cn from 'classnames';

import css from './ClearInput.css';

interface Props extends BaseProps {
  type?: string;
  placeholder?: string;

  onChange?(event: React.ChangeEvent<HTMLInputElement>, value: string): void;

  input?: {
    className: string;
  };

  button?: {
    className: string;
  };
};

interface State {
  value: string;
};

class ClearInput extends React.Component<Props, State> {
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
    const cClearInput = cn(css.ClearInput, this.props.className);
    const { type = 'text', placeholder, input, button } = this.props;

    const inputClassName = cn(input && input.className, css.Input);
    const buttonClassName = cn(button && button.className, css.Button);

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
