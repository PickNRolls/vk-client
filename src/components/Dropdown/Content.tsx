import * as React from 'react';
import cn from 'classnames';
import css from './Dropdown.css';

export interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event?: React.MouseEvent) => void;
};

const Content: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <div className={cn(css.Content, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Content;
