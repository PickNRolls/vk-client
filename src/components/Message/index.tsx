import React from 'react';

import withClickHandler from '../../hocs/messages/withClickHandler';
import Token from '../Token';

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

class Message extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  render() {
    const propsClass = this.props.className ? this.props.className + ' clearfix' : 'clearfix';
    const cMessage = cn('Message', propsClass, {
      active: this.props.isActive
    });
    const { data } = this.props;

    const messageContent = (
      <div className="Message-Content">
        {data.content}
      </div>
    );

    return (
      <div className={cMessage} onClick={this.handleClick}>
        <Token
          goToPage={{
            target: '_blank'
          }}
          user={data.author}
          className="Message-Token"
        />

        <div className="Message-Top">
          <Token
            type="text"
            goToPage={{
              target: '_blank'
            }}
            user={data.author}
            value={data.author.firstName}
            className="Message-AuthorName"
          />
          <div className="Message-Date">
            {data.date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>

        {messageContent}
      </div>
    );
  }
};

export default withClickHandler<IProps>(Message);
