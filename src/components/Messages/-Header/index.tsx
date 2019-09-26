import React from 'react';
import { Link } from 'react-router-dom';

import Token from '../../Token';

import IBaseProps from '../../../typing/IBaseProps';
import IUser from '../../../typing/IUser';
import cn from '../../../helpers/cn';
import I18N from '../../../helpers/i18n';
import localKeyset from '../i18n';

interface IProps extends IBaseProps {
  state: 'default' | 'in dialog';
  interlocutor?: IUser;
  onBack(): void;
};

const HeaderContent: React.FC<IProps> = props => {
  const { state, interlocutor } = props;

  if (state === 'in dialog' && interlocutor) {
    const inDialogContent = (
      <>
        <button className="Messages-BackButton" onClick={() => props.onBack()}>
          {I18N(localKeyset, 'go-back')}
        </button>

        <div className="Messages-InterlocutorInfo">
          <Token
            goToPage={{
              target: '_blank'
            }}
            user={interlocutor}
            type="text"
          />
          <span className="Messages-InterlocutorStatus">
            {interlocutor.online instanceof Date
              ? interlocutor.online.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
              })
              : 'Online'
            }
          </span>
        </div>

        <Token
          goToPage={{
            target: '_blank'
          }}
          user={interlocutor}
          className="Messages-InterlocutorToken"
        />
      </>
    );

    return (
      <div className="Messages-HeaderInDialog">
        {inDialogContent}
      </div>
    );
  }

  return (
    <div></div>
  );
};

export default HeaderContent;
