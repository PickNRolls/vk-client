import React from 'react';

import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

interface IProps extends IBaseProps {

};

interface IState {

};

class UserPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const cUserPage = cn('UserPage', this.props.className);
    return (
      <div className={cUserPage}>
        <div className="page-column-thin">

        </div>
        <div className="page-column-wide">
          
        </div>
      </div>
    );
  }
};

export default UserPage;
