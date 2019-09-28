import React from 'react';

import Message from '../Message';
import SimpleMessage from '../SimpleMessage';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

export interface IProps extends IBaseProps {
  user: IUser;
  interlocutor: IUser;
  messages: IMessage[];
};

interface IState {

};

class MessageGroup extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
