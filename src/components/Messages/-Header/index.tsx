import React from 'react';

import withType from '../../../hocs/tokens/withType';
import Token from '../../Token';
import ClearInput from '../../ClearInput';

import { IElementsProps } from '..';
import I18N from '../../../helpers/i18n';
import localKeyset from '../i18n';

const TextToken = withType('text', Token);

interface IProps extends IElementsProps {
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
          <TextToken
            goToPage={{
              target: '_blank'
            }}
            user={interlocutor}
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
          size={30}
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
    <div className="Messages-HeaderDefault">
      <ClearInput
        type="text"
        className="Messages-Search"
        placeholder={I18N(localKeyset, 'search')}
      />
    </div>
  );
};

export default HeaderContent;
