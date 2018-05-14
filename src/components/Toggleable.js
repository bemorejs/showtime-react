import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Toggleable extends PureComponent {

  static propTypes = {
    children: PropTypes.func
  };

  container = React.createRef();

  state = {
    isOpen: false
  };

  open = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      isOpen: true
    });
  };

  close = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      isOpen: false
    });
  };

  handleClickOutside = (e) => {
    if (!this.container.current.contains(e.target)) {
      this.close(e);
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    return this.props.children({
      innerRef: this.container,
      toggle: this.state.isOpen ? this.close : this.open,
      isOpen: this.state.isOpen
    });
  }

}

export default Toggleable;
