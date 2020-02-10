import * as React from 'react';
import './index.css';

interface Props {
  className?: string;
};

const Logo: React.FC<Props> = props => {
  const cLogo = 'Logo' + (props.className ? ' ' + props.className : '');
  return (
    <div className={cLogo}></div>
  );
};

export default Logo;
