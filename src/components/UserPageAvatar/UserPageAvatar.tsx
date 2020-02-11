import * as React from 'react';
import cn from 'classnames';
import css from './UserPageAvatar.css';

interface Props {
  className?: string;
  imageUrl?: string;
};

const UserPageAvatar: React.FC<Props> = props => {
  const cUserPageAvatar = cn(css.UserPageAvatar, props.className);
  const src = props.imageUrl;

  return (
    <div className={cUserPageAvatar}>
      <img src={src} alt="user avatar" className={css.Image} />
    </div>
  );
};

export default UserPageAvatar;
