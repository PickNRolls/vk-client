import * as React from 'react';
import cn from 'classnames';

import { OwnProps as TokenProps, css, } from 'components/Token';

const withType = <P extends TokenProps>
  (type: 'text' | 'photo', Token: React.ComponentType<P>) => (
    class withType extends React.Component<P> {
      render() {
        const className = cn(this.props.className, css.TextToken);

        if (type === 'text') {
          let { value, user, } = this.props;
          if (!value) {
            value = user.fullName;
          }

          return (
            <Token {...this.props} className={className}>
              {value}
            </Token>
          );
        }

        return (
          <Token
            {...this.props}
            className={className}
          />
        );
      }
    }
  );

export default withType;
