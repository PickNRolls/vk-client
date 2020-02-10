import * as React from 'react';

import { Props as ITokenProps } from '../../components/Token';

const withType = <P extends ITokenProps>
  (type: 'text' | 'photo', Token: React.ComponentType<P>) => (
    class withType extends React.Component<P> {
      render() {
        const className = this.props.className
          ? this.props.className + ' TextToken'
          : 'TextToken';

        if (type === 'text') {
          let { value, user } = this.props;
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
