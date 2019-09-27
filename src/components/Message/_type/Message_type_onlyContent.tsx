import React from 'react';

import Message from '../';
import { IProps as IBaseProps} from '../';

import './Message_type_onlyContent.css';

interface IProps extends IBaseProps {

};

interface IState {

};

class TypeOnlyContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Message
        onlyContent
        {...this.props}
      />
    );
  }
};

export default TypeOnlyContent;
