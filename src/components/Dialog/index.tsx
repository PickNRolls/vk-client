import React from 'react';

import Token from '../Token';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

interface IProps extends IBaseProps {
  user: IUser;
};

interface IState {

};

class Dialog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cDialog = cn('Dialog', this.props.className);

    return (
      <div className={cDialog}>
        <Token className="Dialog-Photo" user={this.props.user} />
        <div className="Dialog-Content">
        
        </div>
      </div>
    );
  }
};

export default Dialog;
