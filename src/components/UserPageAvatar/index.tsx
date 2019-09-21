import React from 'react';

import IBaseProps from '../../typing/IBaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  imageUrl: string;
};

const UserPageAvatar: React.FC<IProps> = props => {
  const cUserPageAvatar = cn('UserPageAvatar', props.className);
  return (
    <div className={cUserPageAvatar}>
      <img src={props.imageUrl} alt="user avatar" className="UserPageAvatar-Image" />
    </div>
  );
};

export default UserPageAvatar;
