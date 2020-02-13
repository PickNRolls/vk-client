import * as React from 'react';

import HeaderContent from './components/Header';
import Content from './components/Content';

import User from 'typing/User';
import cn from 'classnames';

import css from './Messages.css';

interface Props {
  user: User;
  interlocutors: User[];
  loading: boolean;
  className?: string;
}

interface State {
  state: 'default' | 'in dialog';
  interlocutor?: User;
}

class Messages extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      state: 'default',
      interlocutor: undefined,
    };
  }

  handleDialogOpen = (user: User) => {
    this.setState({
      state: 'in dialog',
      interlocutor: user,
    });
  }

  handleDialogExit = () => {
    this.setState({
      state: 'default',
      interlocutor: undefined,
    });
  }

  handleDialogRemove = (uid: string) => {
    console.log('removed ' + uid);
  }

  render() {
    const cMessages = cn(css.Messages, this.props.className);
    const {
      user,
      interlocutors,
      loading,
    } = this.props;
    const { state, interlocutor, } = this.state;

    return (
      <div className={cMessages}>
        <header className={css.Header}>
          <div className={css.HeaderWrap}>
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
          loading={loading}
          interlocutors={interlocutors}
          interlocutor={interlocutor}
          onDialogOpen={this.handleDialogOpen}
          onDialogRemove={this.handleDialogRemove}
        />
        <footer className={css.Footer}>
          Footer
        </footer>
      </div>
    );
  }
}

export default Messages;
