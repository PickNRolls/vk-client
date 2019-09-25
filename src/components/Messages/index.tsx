import React from 'react';

import Dialog from '../Dialog';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {

};

class Messages extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cMessages = cn('Messages', this.props.className);

    return (
      <div className={cMessages}>
        <header className="Messages-Header">
          <div className="Messages-HeaderWrap">
            Search
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
                content: 'Привет гандонище',
                date: new Date()
              },
              className: "Messages-Dialog"
            },
            {
              user: this.props.user,
              userOfToken: this.props.user,
              lastMessage: {
                user: this.props.user,
                content: 'Привет гандонище',
                date: new Date()
              },
              className: "Messages-Dialog"
            },
            {
              user: this.props.user,
              userOfToken: this.props.user,
              lastMessage: {
                user: this.props.user,
                content: 'Привет гандонище',
                date: new Date()
              },
              className: "Messages-Dialog"
            },
            {
              user: this.props.user,
              userOfToken: this.props.user,
              lastMessage: {
                user: this.props.user,
                content: 'Привет гандонище',
                date: new Date()
              },
              className: "Messages-Dialog"
            },
            {
              user: this.props.user,
              userOfToken: this.props.user,
              lastMessage: {
                user: this.props.user,
                content: 'Привет гандонище',
                date: new Date()
              },
              className: "Messages-Dialog"
            }
          ].map(props => (
            <li className="Messages-DialogsItem">
              <Dialog {...props} onRemove={uid => console.log(uid)} />
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
