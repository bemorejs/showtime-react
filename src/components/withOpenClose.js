import React, { PureComponent } from 'react';
import classNames from '../utils/classNames';

const withOpenClose = (Component) =>
  class extends PureComponent {

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
      return (
        <div className={classNames.container} ref={this.container}>
          <Component
            {...this.props}
            isOpen={this.state.isOpen}
            toggle={this.state.isOpen ? this.close : this.open}
          />
        </div>
      );
    }

  };

export default withOpenClose;
