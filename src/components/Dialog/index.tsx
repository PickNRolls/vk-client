import React from 'react';

import Token from '../Token';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  user: IUser;
  userOfToken: IUser;
  lastMessage: IMessage;

  onOpen(user: IUser): void;
  onRemove(uid: IUser['id']): void;
};

interface IState {

};

class Dialog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
    const cDialog = cn('Dialog', this.props.className);
    const {
      user,
      userOfToken,
      lastMessage
    } = this.props;
    const { fullName } = userOfToken;

    return (
      <div className={cDialog} onClick={this.handleOpen}>
        <Token
          onClick={this.handleTokenClick}
          goToPage={{ target: '_blank'}}
          user={userOfToken}
          className="Dialog-Photo"
        />
        <div className="Dialog-Content">
          <div className="Dialog-Top">
            <div className="Dialog-FullName">
              {fullName}
            </div>
            <div className="Dialog-Date">
              {
                lastMessage.date.toLocaleTimeString(navigator.language, {
                  hour: '2-digit',
                  minute: '2-digit'
                })
              }
            </div>
            <button className="Dialog-Remove" onClick={this.handleRemove}>
              &#215;
            </button>
          </div>

          <div className="Dialog-LastMessage">
            {lastMessage.author.id === user.id
              ? <>
                <Token
                  user={user}
                  className="Dialog-UserPhoto"
                />
              </>
              : null
            }
            <div className="Dialog-LastMessageContent">
              {lastMessage.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dialog;
