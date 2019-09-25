import React from 'react';
import { Link } from 'react-router-dom';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  user: IUser;
  goToPage?: boolean | {
    target?: '_blank'
  };
};

interface IState {

};

class Token extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, goToPage } = this.props;
    const cToken = cn('Token', this.props.className, {
      'disable': !goToPage
    });

    let target = typeof goToPage === 'object' ? goToPage.target : undefined;

    return (
      <Link className={cToken} to={`/id${user.id}`} target={target} >
        <img
          src={user.avatar}
          alt={user.fullName}
          className="Token-Image"
        />
      </Link>
    );
  }
};

export default Token;
