import * as React from 'react';

import withClickHandler from '../../hocs/messages/withClickHandler';

import BaseProps from '../../typing/BaseProps';
import Message from '../../typing/Message';
import cn from '../../helpers/cn';

import './index.css';

export interface Props extends BaseProps {
  data: Message;
  isActive: boolean;

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
    const cSimpleMessage = cn('SimpleMessage', this.props.className, {
      active: this.props.isActive
    });

    return (
      <div className={cSimpleMessage} onClick={this.handleClick}>
        {this.props.data.content}
      </div>
    );
  }
};

export default withClickHandler<Props>(SimpleMessage);
