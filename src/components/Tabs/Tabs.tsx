import * as React from 'react';

import TabItem from './components/Tab';

import { Tab } from './types';
import cn from 'classnames';

import css from './Tabs.css';

interface Props {
  items: Tab[];
  className?: string;

  onChange: (value: string) => void;
};

interface State {
  currentTab: string;
};

class Tabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTab: props.items[0].value
    };
  }
  
  handleTabClick = (value: string) => {
    this.props.onChange(value);

    this.setState({
      currentTab: value
    });
  }

  render() {
    const cTabs = cn(css.Tabs, this.props.className);
    const { items } = this.props;
    const { currentTab } = this.state;

    return (
      <ul className={cTabs}>
        {
          items.map(item => (
            <TabItem
              value={item.value}
              text={item.text}
              count={item.count}
              active={item.value === currentTab}
              onClick={this.handleTabClick}
              key={item.value}
            />
          ))
        }
      </ul>
    );
  }
};

export default Tabs;
