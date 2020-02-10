import * as React from 'react';

interface OwnActiveProps {
  isActive: boolean;
};

interface State {
  isActive: boolean;
}

const withClickHandler = <P extends OwnActiveProps>(UnwrappedComponent: React.ComponentType<P>) => (
  class WithClickHandler extends React.Component<P, State> {
    constructor(props: P) {
      super(props);
      this.state = {
        isActive: props.isActive
      };
    }

    handleClick = (event: React.MouseEvent) => {
      this.setState({
        isActive: !this.state.isActive
      });
    }

    render() {
      return (
        <UnwrappedComponent onClick={this.handleClick}
          {...this.props}
          isActive={this.state.isActive}
        />
      );
    }
  }
);

export default withClickHandler;
