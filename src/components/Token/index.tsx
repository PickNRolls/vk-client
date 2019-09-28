import React from 'react';
import { Link } from 'react-router-dom';

import withType from '../../hocs/tokens/withType';

import IBaseProps from '../../typing/IBaseProps';
import IUser from '../../typing/IUser';
import cn from '../../helpers/cn';

import './index.css';

export interface IProps extends IBaseProps {
  user: IUser;
  value?: string;
  size?: number;
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
    const { user, goToPage, size = 50 } = this.props;
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
        <span
          className="Token-Image"
          style={{
            backgroundImage: `url(${user.avatar})`,
            backgroundSize: `${size}px`
          }}
        />
        {this.props.children}
      </Link>
    );
  }
};

export default Token;
