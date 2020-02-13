import * as React from 'react';
import cn from 'classnames';
import css from './Logo.css';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = props => {
  const cLogo = cn(css.Logo, props.className);

  return (
    <div className={cLogo}></div>
  );
};

export default Logo;
