import * as React from 'react';

import cn from 'classnames';

import css from './Preloader.css';

interface Props {
  ms?: number;
  className?: string;
}

const Preloader: React.FC<Props> = props => {
  const cPreloader = cn(css.Preloader, props.className);
  return (
    <div className={cPreloader}>
      <span className={css.Circle}></span>
      <span className={css.Circle}></span>
      <span className={css.Circle}></span>
    </div>
  );
};

export default Preloader;
