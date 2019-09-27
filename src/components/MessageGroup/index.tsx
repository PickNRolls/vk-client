import React from 'react';

import Message from '../Message';
import MessageOnlyContent from '../Message/_type/Message_type_onlyContent';

import IBaseProps from '../../typing/IBaseProps';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  content: {
    first: IMessage;
    other: string[];
  };
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
    const { content } = this.props;
    const { author } = content.first;

    return (
      <div className={cMessageGroup}>
        <Message
          data={{
            author,
            content: content.first.content,
            date: content.first.date
          }}
        />

        {content.other.map(string => (
          <MessageOnlyContent
            key={string}
            data={{
              author,
              content: content.first.content,
              date: content.first.date
            }}
          />
        ))}
      </div>
    );
  }
};

export default MessageGroup;
