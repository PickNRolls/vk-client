import React from 'react';

import Dialog from '../Dialog';
import HeaderContent from './-Header';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {
  inDialog: boolean;
  interlocutor?: IUser;
};

class Messages extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inDialog: false,
      interlocutor: undefined
    };
  }

  handleDialogOpen = (uid: string) => {
    this.setState({
      inDialog: true,
      interlocutor: this.props.user
    });
  }

  handleDialogExit = () => {
    this.setState({
      inDialog: false,
      interlocutor: undefined
    });
  }

  render() {
    const cMessages = cn('Messages', this.props.className);
    const { inDialog, interlocutor } = this.state;

    return (
      <div className={cMessages}>
        <header className="Messages-Header">
          <div className="Messages-HeaderWrap">
            <HeaderContent
              state={inDialog ? 'in dialog' : 'default'}
              interlocutor={interlocutor}
              onBack={this.handleDialogExit}
            />
          </div>
        </header>
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
                onRemove={uid => console.log('closed ' + uid)}
              />
            </li>
          ))
          }
        </ul>
        <footer className="Messages-Footer">
          Footer
        </footer>
      </div>
    );
  }
};

export default Messages;
