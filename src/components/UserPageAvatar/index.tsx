import * as React from 'react';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface Props extends BaseProps {
  imageUrl?: string;
};

const UserPageAvatar: React.FC<Props> = props => {
  const cUserPageAvatar = cn('UserPageAvatar', props.className);
  const src = props.imageUrl;

  return (
    <div className={cUserPageAvatar}>
      <img src={src} alt="user avatar" className="UserPageAvatar-Image" />
    </div>
  );
};

export default UserPageAvatar;
