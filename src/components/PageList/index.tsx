import * as React from 'react';

import Tabs from '../Tabs';

import {
  HeaderProp,
  HeaderTabProp,
  ItemProps
} from './types';
import cn from '../../helpers/cn';

import './index.css';

interface Props<P> {
  header: HeaderProp;
  itemComponent: React.ComponentType<P>;
  items: P[];
  className?: string;
  listProps?: {
    className?: string;
  }
};

type State = {};

class PageList<P extends ItemProps> extends React.Component<Props<P>, State> {
  constructor(props: Props<P>) {
    super(props);
    this.state = {};
  }

  handleTabsChange = (value: string) => {
    const header = this.props.header as HeaderTabProp;
    header.onTabChange(value);
  }

  handleHeaderButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const header = this.props.header as HeaderTabProp;
    header.button.onClick(event);
  }

  render() {
    const { props } = this;
    const cPageList = cn('PageList', props.className);

    let Header;
    switch (props.header.type) {
      default:
      case 'tabs': {
        const {
          tabs,
          button
        } = props.header;

        Header = (
          <header className="PageList-Header">
            <Tabs items={tabs} onChange={this.handleTabsChange} />

            <button
              className="PageList-HeaderButton"
              onClick={this.handleHeaderButtonClick}
              >
              {button.text}
            </button>
          </header>
        );

        break;
      }

      case 'text': {
        const {
          text,
          count
        } = props.header;

        Header = (
          <header className="PageList-Header">
            <span className="PageList-HeaderText">
              {text}
            </span>
            <span className="PageList-HeaderCount">
              {count !== 0 ? count : ''}
            </span>
          </header>
        );

        break;
      }
    }

    const Component = props.itemComponent;
    const cList = cn('PageList-List', props.listProps && props.listProps.className);
    return (
      <div className={cPageList}>
        { Header }

        <ul className={cList}>
          {
            props.items.map(item => (
              <Component {...item} key={item.uniqId} />
            ))
          }
        </ul>
      </div>
    );
  }
};

export default PageList;

