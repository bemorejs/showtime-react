import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import Button from './Button';
import Menu from './Menu';

class DropDown extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }))
  };

  static defaultProps = {
    label: 'Menu',
    items: []
  };

  state = {
    isOpen: false
  };

  open = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: true
    });
  };

  close = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { props, state } = this;

    return (
      <div className={classNames.container}>
        <Button onClick={state.isOpen ? this.close : this.open}>{props.label}</Button>
        {state.isOpen && <Menu items={props.items} />}
      </div>
    );
  }

}

export default DropDown;
