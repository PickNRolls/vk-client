import * as React from 'react';

import Token from 'components/Token';

import User from 'typing/User';
import Message from 'typing/Message';
import cn from 'classnames';

import css from './Dialog.css';

interface Props {
  user: User;
  userOfToken: User;
  lastMessage: Message;
  className?: string;

  onOpen(user: User): void;
  onRemove(uid: string): void;
}

interface State {

}

class Dialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleTokenClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  }

  handleOpen = () => {
    this.props.onOpen(this.props.userOfToken);
  }

  handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    this.props.onRemove(this.props.userOfToken.id);
  }

  render() {
    const cDialog = cn(css.Dialog, this.props.className);
    const {
      user,
      userOfToken,
      lastMessage,
    } = this.props;
    const { fullName, } = userOfToken;

    return (
      <div className={cDialog} onClick={this.handleOpen}>
        <Token
          onClick={this.handleTokenClick}
          goToPage={{ target: '_blank',}}
          user={userOfToken}
          className={css.Photo}
        />
        <div className={css.Content}>
          <div className={css.Top}>
            <div className={css.FullName}>
              {fullName}
            </div>
            <div className={css.Date}>
              {
                lastMessage.date.toLocaleTimeString(navigator.language, {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }
            </div>
            <button className={css.Remove} onClick={this.handleRemove}>
              &#215;
            </button>
          </div>

          <div className={css.LastMessage}>
            {lastMessage.authorId === user.id
              ? <>
                <Token
                  user={user}
                  size={25}
                  className={css.UserPhoto}
                />
              </>
              : null
            }
            <div className={css.LastMessageContent}>
              {lastMessage.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
