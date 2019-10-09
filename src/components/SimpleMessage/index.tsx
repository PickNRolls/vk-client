import React from 'react';

import withClickHandler from '../../hocs/messages/withClickHandler';

import IBaseProps from '../../typing/IBaseProps';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

export interface IProps extends IBaseProps {
  data: IMessage;
  isActive: boolean;

  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
};

interface IState {

};

class SimpleMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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

export default withClickHandler<IProps>(SimpleMessage);
