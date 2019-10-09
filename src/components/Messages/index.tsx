import React from 'react';

import HeaderContent from './-Header';
import Content from './-Content';

import BaseProps from '../../typing/BaseProps';
import User from '../../typing/User';
import cn from '../../helpers/cn';

import './index.css';

export interface IElementsProps {
  state: 'default' | 'in dialog';
  interlocutor?: User;
};

interface Props extends BaseProps {
  user: User;
  interlocutors: User[];
};

interface IState {
  state: 'default' | 'in dialog';
  interlocutor?: User;
};

class Messages extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      state: 'default',
      interlocutor: undefined
    };
  }

  handleDialogOpen = (user: User) => {
    this.setState({
      state: 'in dialog',
      interlocutor: user
    });
  }

  handleDialogExit = () => {
    this.setState({
      state: 'default',
      interlocutor: undefined
    });
  }

  handleDialogRemove = (uid: string) => {
    console.log('removed ' + uid);
  }

  render() {
    const cMessages = cn('Messages', this.props.className);
    const { state, interlocutor } = this.state;
    const { user, interlocutors } = this.props;

    return (
      <div className={cMessages}>
        <header className="Messages-Header">
          <div className="Messages-HeaderWrap">
            <HeaderContent
              state={state}
              interlocutor={interlocutor}
              onBack={this.handleDialogExit}
            />
          </div>
        </header>
        <Content
          state={state}
          user={user}
          interlocutors={interlocutors}
          interlocutor={interlocutor}
          onDialogOpen={this.handleDialogOpen}
          onDialogRemove={this.handleDialogRemove}
        />
        <footer className="Messages-Footer">
          Footer
        </footer>
      </div>
    );
  }
};

export default Messages;
