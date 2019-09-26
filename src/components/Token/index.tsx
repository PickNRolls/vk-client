import React from 'react';
import { Link } from 'react-router-dom';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import TokenTypeText from './_type/Token_type_text';

import './index.css';

export interface IProps extends IBaseProps {
  type?: 'default' | 'text';
  user: IUser;
  goToPage?: boolean | {
    target?: '_blank'
  };
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

interface IState {

};

class Token extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { onClick } = this.props
    onClick && onClick(event);
  }

  render() {
    if (this.props.type === 'text') {
      const props = {
        ...this.props,
      };
      delete props.type;
      return <TokenTypeText {...props} />
    }

    const { user, goToPage } = this.props;
    const cToken = cn('Token', this.props.className, {
      disable: !goToPage
    });

    let target = typeof goToPage === 'object' ? goToPage.target : undefined;

    return (
      <Link
        onClick={this.handleClick}
        to={`/id${user.id}`}
        target={target}
        className={cToken}
        >
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
