import React from 'react';

import Dialog from '../../Dialog';
import Message from '../../Message';

import { IElementsProps } from '..';
import IUser from '../../../typing/IUser';

interface IProps extends IElementsProps {
  user: IUser;

  onDialogOpen(uid: IUser['id']): void;
  onDialogRemove(uid: IUser['id']): void;
};

interface IState {

};

class MessagesContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  handleDialogOpen = (uid: IUser['id']) => {
    this.props.onDialogOpen(uid);
  }

  handleDialogRemove = (uid: IUser['id']) => {
    this.props.onDialogRemove(uid);
  }

  render() {
    const { state, interlocutor } = this.props;
    if (state === 'in dialog' && interlocutor) {
      const inDialogContent = (
        <div className="Messages-Content">
          <ul className="Messages-List">
            <li className="Messages-Message">
              <Message
                data={{
                  author: interlocutor,
                  content: `Мужик заходит в магазин сувениров. Видит маленькую бронзовую фигурку кошки. На ценнике написано: "кошка — 1000 рублей, её история — 10 000 рублей." 

— Я могу купить кошку без истории? — спрашивает он продавца. 

— Конечно, — отвечает продавец, — Но за историей вы всё равно вернётесь. 

Мужик покупает маленькую бронзовую кошку и идёт по городу. Вдруг он замечает, что следом за ним сначала идёт одна кошка, потом другая, потом ещё. Через некоторое время за ним уже идут тысячи кошек. Мужик в ужасе начинает убегать. Кошки не отстают. Тогда он размахивается и бросает маленькую бронзовую фигурку кошки в реку. Все кошки бежавшие до этого за мужиком, тут же прыгают в воду вслед за статуэткой и ебут ее там в жопу так долго и неистово, что помирают от усталости. `,
                  date: new Date()
                }}
              />
            </li>
            <li className="Messages-Message">
              <Message
                data={{
                  author: interlocutor,
                  content: 'Privet',
                  date: new Date()
                }}
              />
            </li>
          </ul>
        </div>
      );

      return inDialogContent;
    }

    if (state === 'default') {
      const defaultContent = (
        <div className="Messages-Content">
          <ul className="Messages-Dialogs">
            {
              [
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    author: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    author: this.props.user,
                    content: 'Привет Привет Привет Привет Привет Привет Привет ПриветПриветПривет Привет Привет Привет Привет Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    author: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    author: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    author: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                }
              ].map(props => (
                <li className="Messages-DialogsItem">
                  <Dialog
                    {...props}
                    onOpen={this.handleDialogOpen}
                    onRemove={this.handleDialogRemove}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      );

      return defaultContent;
    }
  }
};

export default MessagesContent;
