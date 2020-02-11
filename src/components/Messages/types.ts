import User from 'typing/User';

export interface ElementsProps {
  state: 'default' | 'in dialog';
  interlocutor?: User;
};
