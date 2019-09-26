import React from 'react';

import Token from '../Token';

import IBaseProps from '../../typing/IBaseProps';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

interface IProps extends IBaseProps {
  data: IMessage;
};

interface IState {

};

class Message extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const propsClass = this.props.className ? this.props.className + ' clearfix' : 'clearfix';
    const cMessage = cn('Message', propsClass);
    const { data } = this.props;

    return (
      <div className={cMessage}>
        <Token
          goToPage={{
            target: '_blank'
          }}
          user={data.author}
          className="Message-Token"
        />

        <div className="Message-Top">
          <Token
            type="text"
            goToPage={{
              target: '_blank'
            }}
            user={data.author}
            value={data.author.firstName}
            className="Message-AuthorName"
          />
          <div className="Message-Date">
            {data.date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
        <div className="Message-Content">
          {data.content}
        </div>
      </div>
    );
  }
};

export default Message;
