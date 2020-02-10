import * as React from 'react';

import BaseProps from '../../typing/BaseProps';
import cn from '../../helpers/cn';

import './index.css';

interface Props extends BaseProps {
  ms?: number;
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
