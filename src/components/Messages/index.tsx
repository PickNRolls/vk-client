import React from 'react';

import HeaderContent from './-Header';
import Content from './-Content';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import './index.css';

export interface IElementsProps {
  state: 'default' | 'in dialog';
  interlocutor?: IUser;
};

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

  handleDialogOpen = (uid: IUser['id']) => {
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

  handleDialogRemove = (uid: IUser['id']) => {
    console.log('removed ' + uid);
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
        <Content
          state={inDialog ? 'in dialog': 'default'}
          user={this.props.user}
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
