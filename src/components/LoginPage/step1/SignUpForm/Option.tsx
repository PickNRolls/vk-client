import * as React from 'react';

interface Props {
  value: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLLIElement>, value: string) => void;
};

class Option extends React.Component<Props> {
  handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    this.props.onClick(event, this.props.value);
  }

  render() {
    return (
      <li className="SignUpForm-SelectOption" onClick={this.handleClick}>
        {this.props.text}
      </li>
    );
  }
};

export default Option;
