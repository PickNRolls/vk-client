import * as React from 'react';

import withType from 'hocs/tokens/withType';
import Token from 'components/Token';
import ClearInput from 'components/ClearInput';

import { types, keyset as localKeyset, css, } from 'components/Messages';
import I18N from 'helpers/i18n';

const TextToken = withType('text', Token);

interface Props extends types.ElementsProps {
  onBack(): void;
}

const HeaderContent: React.FC<Props> = props => {
  const { state, interlocutor, } = props;

  if (state === 'in dialog' && interlocutor) {
    const inDialogContent = (
      <>
        <button className={css.BackButton} onClick={() => props.onBack()}>
          {I18N(localKeyset, 'go-back')}
        </button>

        <div className={css.InterlocutorInfo}>
          <TextToken
            goToPage={{
              target: '_blank',
            }}
            user={interlocutor}
          />
          <span className={css.InterlocutorStatus}>
            {interlocutor.online instanceof Date
              ? interlocutor.online.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit',
              })
              : 'Online'
            }
          </span>
        </div>

        <Token
          goToPage={{
            target: '_blank',
          }}
          size={30}
          user={interlocutor}
          className={css.InterlocutorToken}
        />
      </>
    );

    return (
      <div className={css.HeaderInDialog}>
        {inDialogContent}
      </div>
    );
  }

  return (
    <div className={css.HeaderDefault}>
      <ClearInput
        type="text"
        className={css.Search}
        placeholder={I18N(localKeyset, 'search')}

        input={{
          className: css.SearchInput,
        }}
      />
    </div>
  );
};

export default HeaderContent;
