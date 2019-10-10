import React from 'react';

import cn from '../../helpers/cn';

interface Props {
  value: string;
  text: string;
  active: boolean;
  count?: number;

  onClick: (value: string) => void;
}

class Tab extends React.Component<Props> {
  handleClick = () => {
    this.props.onClick(this.props.value);
  }

  render() {
    const {
      text,
      count,
      active
    } = this.props;

    const cTabsItem = cn('Tabs-Item', undefined, {
      active
    });

    return (
      <div
        className={cTabsItem}
        onClick={this.handleClick}
        >
        <span className="Tabs-ItemText">
          {text}
        </span>
        <span className="Tabs-ItemCount">
          {count !== 0 ? count : ''}
        </span>
      </div>
    );
  }
};

export default Tab;
