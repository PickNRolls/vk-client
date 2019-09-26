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
    const { state } = this.props;
    if (state === 'in dialog') {
      const inDialogContent = (
        <div className="Messages-Content">
          <ul className="Messages-List">
            <li className="Messages-Message">
              Privet
            </li>
            <li className="Messages-Message">
              Privet
            </li>
            <li className="Messages-Message">
              Privet
            </li>
            <li className="Messages-Message">
              Privet
            </li>
            <li className="Messages-Message">
              Privet
            </li>
            <li className="Messages-Message">
              Privet
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
                    user: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    user: this.props.user,
                    content: 'Привет Привет Привет Привет Привет Привет Привет ПриветПриветПривет Привет Привет Привет Привет Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    user: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    user: this.props.user,
                    content: 'Привет',
                    date: new Date()
                  },
                  className: "Messages-Dialog"
                },
                {
                  user: this.props.user,
                  userOfToken: this.props.user,
                  lastMessage: {
                    user: this.props.user,
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
