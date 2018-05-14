import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import Button from './Button';
import Menu from './Menu';
import withOpenClose from './withOpenClose';

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
      <div className={classNames.container}>
        <Button onClick={props.toggle}>{props.label}</Button>
        {props.isOpen && <Menu items={props.items} />}
      </div>
    );
  }

}

export default withOpenClose(DropDown);
