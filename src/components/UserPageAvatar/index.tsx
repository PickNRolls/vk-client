import React from 'react';

import noAvatarImage from '../../assets/no-avatar.png';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface Props extends BaseProps {
  imageUrl?: string;
};

const UserPageAvatar: React.FC<Props> = props => {
  const cUserPageAvatar = cn('UserPageAvatar', props.className);
  const src = props.imageUrl || noAvatarImage;

  return (
    <div className={cUserPageAvatar}>
      <img src={src} alt="user avatar" className="UserPageAvatar-Image" />
    </div>
  );
};

export default UserPageAvatar;
