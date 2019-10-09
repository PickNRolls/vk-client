import React from 'react';

import Message from '../Message';
import SimpleMessage from '../SimpleMessage';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import MessageInterface from '../../typing/Message';
import cn from '../../helpers/cn';

import './index.css';

export interface Props extends BaseProps {
  user: User;
  interlocutor: User;
  messages: MessageInterface[];
};

interface IState {

};

class MessageGroup extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cMessageGroup = cn('MessageGroup', this.props.className);
    const { messages, user, interlocutor } = this.props;

    const author = messages[0].authorId === user.id
      ? user
      : interlocutor;

    return (
      <div className={cMessageGroup}>
        <Message
          author={author}
          data={messages[0]}
          isActive={false}

          className="MessageGroup-Message"
        />

        {messages.slice(1).map(message => (
          <SimpleMessage
            key={message.id}
            data={message}
            isActive={false}

            className="MessageGroup-SimpleMessage"
          />
        ))}
      </div>
    );
  }
};

export default MessageGroup;
