interface OwnProps {
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type Props =
  & {
    className?: string;
    children?: React.ReactNode;
  }
  & OwnProps
  & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface State {

};