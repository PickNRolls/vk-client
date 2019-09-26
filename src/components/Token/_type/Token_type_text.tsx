import React from 'react';
import { Link } from 'react-router-dom';

import { IProps as IBaseProps } from '../';
import cn from '../../../helpers/cn';

import './Token_type_text.css';

interface IProps extends IBaseProps {

};

interface IState {

};

class TokenTypeText extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, goToPage } = this.props;
    const cTokenTypeText = cn('Token', this.props.className, {
      type: 'text',
      disable: !goToPage
    });

    let target = typeof goToPage === 'object' ? goToPage.target : undefined;

    return (
      <Link
        to={`/id${user.id}`}
        target={target}
        className={cTokenTypeText}
        >
        {user.fullName}
      </Link>
    );
  }
};

export default TokenTypeText;
