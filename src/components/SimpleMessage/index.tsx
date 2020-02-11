import * as React from 'react';

import withClickHandler from 'hocs/messages/withClickHandler';

import Message from 'typing/Message';
import cn from 'classnames';

import css from './SimpleMessage.css';

export interface Props {
  data: Message;
  isActive: boolean;
  className?: string;

  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
};

interface State {

};

class SimpleMessage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  render() {
    const cSimpleMessage = cn(css.SimpleMessage, this.props.className, {
      [css.SimpleMessage_active]: this.props.isActive,
    });

    return (
      <div className={cSimpleMessage} onClick={this.handleClick}>
        {this.props.data.content}
      </div>
    );
  }
};

export default withClickHandler<Props>(SimpleMessage);
