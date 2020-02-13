import * as React from 'react';
import { Props, State, } from './types';
import cn from 'classnames';
import css from './Button.css';

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick, } = this.props;
    onClick && onClick(event);
  }

  render() {
    const {
      disabled,
      onClick,
      ...restProps
    } = this.props;

    const cButton = cn(css.Button, this.props.className, {
      [css.Button_disabled]: !!disabled,
    });

    return (
      <button {...restProps} className={cButton} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
