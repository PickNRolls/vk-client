import React from 'react';

import Token from '../Token';

import IBaseProps from '../../typing/IBaseProps';
import IMessage from '../../typing/IMessage';
import cn from '../../helpers/cn';

import './index.css';

export interface IProps extends IBaseProps {
  onlyContent?: true;
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
    const cMessage = cn('Message', propsClass, {
      type: this.props.onlyContent ? 'onlyContent' : false
    });
    const { data } = this.props;

    const messageContent = (
      <div className="Message-Content">
        {data.content}
      </div>
    );

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

        {messageContent}
      </div>
    );
  }
};

export default Message;
