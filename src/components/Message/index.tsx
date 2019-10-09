import React from 'react';

import withClickHandler from '../../hocs/messages/withClickHandler';
import withType from '../../hocs/tokens/withType';
import Token from '../Token';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import MessageInterface from '../../typing/Message';
import cn from '../../helpers/cn';

import './index.css';

const TextToken = withType('text', Token);

export interface IProps extends BaseProps {
  author: User;
  data: MessageInterface;
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
    const { data, author } = this.props;

    return (
      <div className={cMessage} onClick={this.handleClick}>
        <Token
          goToPage={{
            target: '_blank'
          }}
          size={36}
          user={author}
          className="Message-Token"
        />

        <div className="Message-Top">
          <TextToken
            goToPage={{
              target: '_blank'
            }}
            user={author}
            value={author.firstName}
            className="Message-AuthorName"
          />
          <div className="Message-Date">
            {data.date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>

        <div className="Message-Content">
          {data.content}
        </div>
      </div>
    );
  }
};

export default withClickHandler<IProps>(Message);
