import * as React from 'react';

import Message from 'components/Message';
import SimpleMessage from 'components/SimpleMessage';

import User from 'typing/User';
import MessageInterface from 'typing/Message';
import cn from 'classnames';

import css from './MessageGroup.css';

export interface Props {
  user: User;
  interlocutor: User;
  messages: MessageInterface[];
  className?: string;
}

interface State {

}

class MessageGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cMessageGroup = cn(css.MessageGroup, this.props.className);
    const { messages, user, interlocutor, } = this.props;

    const author = messages[0].authorId === user.id
      ? user
      : interlocutor;

    return (
      <div className={cMessageGroup}>
        <Message
          author={author}
          data={messages[0]}
          isActive={false}

          className={css.Message}
        />

        {messages.slice(1).map(message => (
          <SimpleMessage
            key={message.id}
            data={message}
            isActive={false}

            className={css.SimpleMessage}
          />
        ))}
      </div>
    );
  }
}

export default MessageGroup;
