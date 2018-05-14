import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import Button from './Button';
import Menu from './Menu';

class DropDown extends PureComponent {

  container = React.createRef();

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
    document.addEventListener('click', this.handleClickOutside);
  };

  close = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
    document.removeEventListener('click', this.handleClickOutside);
  };

  handleClickOutside = (e) => {
    if (!this.container.current.contains(e.target)) {
      this.close(e);
    }
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const { props, state } = this;

    return (
      <div className={classNames.container} ref={this.container}>
        <Button onClick={state.isOpen ? this.close : this.open}>{props.label}</Button>
        {state.isOpen && <Menu items={props.items} />}
      </div>
    );
  }

}

export default DropDown;
