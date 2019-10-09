import React from 'react';

import Dialog from '../../Dialog';
import MessageGroup from '../../MessageGroup';

import { IElementsProps } from '..';
import User from '../../../typing/User';
import Message from '../../../typing/Message';

interface IProps extends IElementsProps {
  user: User;
  interlocutors: User[];

  onDialogOpen(user: User): void;
  onDialogRemove(uid: string): void;
};

interface IState {

};

class MessagesContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  handleDialogOpen = (user: User) => {
    this.props.onDialogOpen(user);
  }

  handleDialogRemove = (uid: string) => {
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
      const { list } = user.connections[interlocutor.id].messages;
      let renderContent: JSX.Element[];
      let groupingMessages: Message[][] = [[list[0]]];
      let groupingIndex = 0;
      let lastAuthorId = list[0].authorId;
      for (let i = 1; i < list.length; i++) {
        if (list[i].authorId === lastAuthorId) {
          groupingMessages[groupingIndex].push(list[i]);
        } else {
          groupingIndex++;
          groupingMessages[groupingIndex] = [list[i]];
          lastAuthorId = list[i].authorId;
        }
      }

      renderContent = groupingMessages.map(messages => (
        <li className="Messages-Group" key={messages[0].id}>
          <MessageGroup
            interlocutor={interlocutor}
            user={user}
            messages={messages}
          />
        </li>
      ));

      const inDialogContent = (
        <div className="Messages-Content">
          <ul className="Messages-List">
            {renderContent}
          </ul>
        </div>
      );

      return inDialogContent;
    }

    const defaultContent = (
      <div className="Messages-Content">
        <ul className="Messages-Dialogs">
          {
            interlocutors.map(interlocutor => {
              const { list } = user.connections[interlocutor.id].messages;
              const dialogProps = {
                user,
                userOfToken: interlocutor,
                lastMessage: list[list.length - 1],
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
};

export default MessagesContent;
