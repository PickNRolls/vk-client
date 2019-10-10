import { Tab } from '../Tabs/types';

export interface HeaderTabProp {
  type: 'tabs';
  tabs: Tab[];
  button: {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  onTabChange: (value: string) => void;
};

export interface HeaderTextProp {
  type: 'text';
  text: string;
  count: number;
};

export type HeaderProp =
  | HeaderTabProp
  | HeaderTextProp;


export interface ItemProps {
  uniqId: string;
};
