import * as React from 'react';
import cn from 'classnames';
import css from 'components/Tabs/Tabs.css';

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
      active,
    } = this.props;

    const cTabsItem = cn(css.Item, undefined, {
      active,
    });

    return (
      <div
        className={cTabsItem}
        onClick={this.handleClick}
      >
        <span className={css.ItemText}>
          {text}
        </span>
        <span className={css.ItemCount}>
          {count !== 0 ? count : ''}
        </span>
      </div>
    );
  }
}

export default Tab;
