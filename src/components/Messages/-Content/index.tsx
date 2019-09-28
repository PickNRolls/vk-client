import React from 'react';

import Dialog from '../../Dialog';
import MessageGroup from '../../MessageGroup';

import { IElementsProps } from '..';
import IUser from '../../../typing/IUser';

interface IProps extends IElementsProps {
  user: IUser;
  interlocutors: IUser[];

  onDialogOpen(user: IUser): void;
  onDialogRemove(uid: IUser['id']): void;
};

interface IState {

};

class MessagesContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  handleDialogOpen = (user: IUser) => {
    this.props.onDialogOpen(user);
  }

  handleDialogRemove = (uid: IUser['id']) => {
    this.props.onDialogRemove(uid);
  }

  render() {
    const {
      state,
      user,
      interlocutor,
      interlocutors
    } = this.props;

    if (state === 'in dialog' && interlocutor) {
      const inDialogContent = (
        <div className="Messages-Content">
          <ul className="Messages-List">
            <li className="Messages-Group">
              <MessageGroup
                content={{
                  first: {
                    author: interlocutor,
                    content: 'first message',
                    date: new Date()
                  },
                  other: [
                    'second message',
                    'third message'
                  ]
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
              interlocutors.map(interlocutor => {
                const dialogProps = {
                  user,
                  userOfToken: interlocutor,
                  lastMessage: {
                    author: interlocutor,
                    content: interlocutor.fullName,
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                };

                return (
                  <li className="Messages-DialogsItem" key={dialogProps.userOfToken.id}>
                    <Dialog
                      {...dialogProps}
                      onOpen={this.handleDialogOpen}
                      onRemove={this.handleDialogRemove}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
      );

      return defaultContent;
    }
  }
};

export default MessagesContent;
