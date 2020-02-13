import * as React from 'react';
import withOutsideClick from 'react-click-outside';
import Item from './Item';
import Switcher, { Props as SwitcherProps, } from './Switcher';
import Content, { Props as ContentProps, } from './Content';
import cn from 'classnames';
import css from './Dropdown.css';

interface RenderArgument {
  switcher: {
    Component: React.ComponentType<SwitcherProps>,
    onClick: () => void,
  },
  content: {
    Component: React.ComponentType<ContentProps>,
    onClick: (event: React.MouseEvent) => void,
  }
}

type RenderFunc = (argument: RenderArgument) => React.ReactNode;

interface Props {
  render: RenderFunc;
  className?: string;
}

interface State {
  expanded: boolean;
}

class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  static Item = Item;

  handleClickOutside = () => {
    this.collapse();
  }

  handleContentClick = (event: React.MouseEvent) => {
    const target = event.target as Element;
    if (target.closest('.' + css.Item)) {
      this.collapse();
    }
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  collapse = () => {
    this.setState({
      expanded: false,
    });
  }

  render() {
    const {
      className,
      render,
    } = this.props;

    const cDropdown = cn(css.Dropdown, className, {
      [css.Dropdown_expanded]: this.state.expanded,
    });

    return (
      <div className={cDropdown}>
        {render({
          switcher: {
            Component: Switcher,
            onClick: this.toggle,
          },
          content: {
            Component: Content,
            onClick: this.handleContentClick,
          },
        })}
      </div>
    );
  }
}

export default withOutsideClick(Dropdown);
