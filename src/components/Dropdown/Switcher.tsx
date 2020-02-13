import * as React from 'react';
import cn from 'classnames';
import css from './Dropdown.css';

export interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Switcher: React.FC<Props> = ({ children, className, onClick, }) => {
  return (
    <div
      onClick={onClick}
      className={cn(css.Switcher, className)}
    >
      {children}
    </div>
  );
};

export default Switcher;

