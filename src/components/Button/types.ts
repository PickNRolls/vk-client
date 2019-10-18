import BaseProps from '../../typing/BaseProps';

interface OwnProps {
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type Props =
  & OwnProps
  & BaseProps
  & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface State {

};