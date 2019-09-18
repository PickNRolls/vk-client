import React from 'react';
import './index.css';

interface IProps {
  className?: string;
};

const Logo: React.FC<IProps> = props => {
  const cLogo = 'Logo' + (props.className ? ' ' + props.className : '');
  return (
    <div className={cLogo}></div>
  );
};

export default Logo;
