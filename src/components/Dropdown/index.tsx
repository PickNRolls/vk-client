import * as React from 'react';

import Item from './Item';

import cn from '../../helpers/cn';

import './index.css';

interface Props {
  switcher: JSX.Element;
  content: JSX.Element;
  className?: string;
};

interface State {
  expanded: boolean;
};

class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  static Item = Item;

  handleContentClick = (event: React.MouseEvent) => {
    const target = event.target as Element;
    if (target.closest('.Dropdown-Item')) {
      this.collapse();
    }
  }

  handleBlur = (event: React.FocusEvent) => {
    if (event.currentTarget.contains(event.relatedTarget as Node)) return;
    this.collapse();
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  collapse = () => {
    this.setState({
      expanded: false
    });
  }

  render() {
    const {
      className,
      switcher,
      content
    } = this.props;

    const cDropdown = cn('Dropdown', className, {
      expanded: this.state.expanded
    });

    return (
      <div tabIndex={0} className={cDropdown} onBlur={this.handleBlur}>
        <div
          onClick={this.toggle}
          className="Dropdown-Switcher">
            {switcher}
        </div>

        <div className="Dropdown-Content" onClick={this.handleContentClick}>
          {content}
        </div>
      </div>
    );
  }
};

export default Dropdown;
