import * as React from 'react';

import Token from 'components/Token';

import User from 'typing/User';
import withType from 'hocs/tokens/withType';
import cn from 'classnames';

import css from './Friend.css';

const TextToken = withType('text', Token);

export type OwnProps = {
  uniqId: string;
  className?: string;
} & User;

type Props = OwnProps;

interface State {

};

class Friend extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const cFriend = cn(css.Friend, this.props.className);

    const user = {
      ...this.props,
      uniqId: undefined
    };

    return (
      <div className={cFriend}>
        <Token
          goToPage={true}
          size={80}
          user={user}
          className={css.Photo}
        />

        <TextToken
          goToPage={true}
          user={user}
          className={css.Name}
        />
      </div>
    );
  }
};

export default Friend;
