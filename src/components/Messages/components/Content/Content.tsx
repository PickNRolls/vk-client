import * as React from 'react';

import Dialog from 'components/Dialog';
import MessageGroup from 'components/MessageGroup';
import Preloader from 'components/Preloader';

import { types, css, } from 'components/Messages';
import User from 'typing/User';
import Message from 'typing/Message';

interface Props extends types.ElementsProps {
  user: User;
  interlocutors: User[];
  loading: boolean;

  onDialogOpen(user: User): void;
  onDialogRemove(uid: string): void;
}

interface State {

}

class MessagesContent extends React.Component<Props, State> {
  constructor(props: Props) {
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
      loading,
      interlocutor,
      interlocutors,
    } = this.props;

    // if (state === 'in dialog' && interlocutor) {
    //   const { list } = user.connections[interlocutor.id].messages;
    //   let renderContent: JSX.Element[];
    //   let groupingMessages: Message[][] = [[list[0]]];
    //   let groupingIndex = 0;
    //   let lastAuthorId = list[0].authorId;
    //   for (let i = 1; i < list.length; i++) {
    //     if (list[i].authorId === lastAuthorId) {
    //       groupingMessages[groupingIndex].push(list[i]);
    //     } else {
    //       groupingIndex++;
    //       groupingMessages[groupingIndex] = [list[i]];
    //       lastAuthorId = list[i].authorId;
    //     }
    //   }

    //   renderContent = groupingMessages.map(messages => (
    //     <li className="Messages-Group" key={messages[0].id}>
    //       <MessageGroup
    //         interlocutor={interlocutor}
    //         user={user}
    //         messages={messages}
    //       />
    //     </li>
    //   ));

    //   const inDialogContent = (
    //     <div className="Messages-Content">
    //       <ul className="Messages-List">
    //         {renderContent}
    //       </ul>
    //     </div>
    //   );

    //   return inDialogContent;
    // }

    const defaultContent = (
      <div className={css.Content}>
        <ul className={css.Dialogs}>
          {/* {
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
          } */}
        </ul>

        {
          loading && <Preloader className={css.Preloader} />
        }
      </div>
    );

    return defaultContent;
  }
}

export default MessagesContent;
