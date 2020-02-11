import * as React from 'react';

import cn from '../../helpers/cn';

import './index.css';

interface Props {
  ms?: number;
  className?: string;
};

const Preloader: React.FC<Props> = props => {
  const cPreloader = cn('Preloader', props.className);
  return (
    <div className={cPreloader}>
      <span className="Preloader-Circle"></span>
      <span className="Preloader-Circle"></span>
      <span className="Preloader-Circle"></span>
    </div>
  );
};

export default Preloader;
