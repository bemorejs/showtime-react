import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import Button from './Button';
import Menu from './Menu';
import Toggleable from './Toggleable';

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

  render() {
    const { props } = this;

    return (
      <Toggleable>
        {({ isOpen, innerRef, toggle }) => (
          <div className={classNames.container} ref={innerRef}>
            <Button onClick={toggle}>{props.label}</Button>
            {isOpen && <Menu items={props.items} />}
          </div>
        )}
      </Toggleable>
    );
  }

}

export default DropDown;
