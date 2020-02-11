import * as React from 'react';

import withClickHandler from 'hocs/messages/withClickHandler';
import withType from 'hocs/tokens/withType';
import Token from 'components/Token';

import User from 'typing/User';
import MessageInterface from 'typing/Message';
import cn from 'classnames';

import css from './Message.css';

const TextToken = withType('text', Token);

export interface Props {
  author: User;
  data: MessageInterface;
  isActive: boolean;
  className?: string;

  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
};

interface State {

};

class Message extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  render() {
    const propsClass = cn(this.props.className, 'clearfix');
    const cMessage = cn(css.Message, propsClass, {
      [css.Message_active]: this.props.isActive
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
          className={css.Token}
        />

        <div className={css.Top}>
          <TextToken
            goToPage={{
              target: '_blank'
            }}
            user={author}
            value={author.firstName}
            className={css.AuthorName}
          />
          <div className={css.Date}>
            {data.date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>

        <div className={css.Content}>
          {data.content}
        </div>
      </div>
    );
  }
};

export default withClickHandler<Props>(Message);
