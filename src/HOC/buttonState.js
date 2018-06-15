import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonState = () => WrappedComponent =>
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isClick: false
      };
      HOC.propTypes = {
        handlerClick: PropTypes.func
      };
    }
    componentDidMount() {
      addEventListener('transitionend', this.set);
    }
    set = () => {
      this.setState({
        isClick: false
      });
    };
    componentWillUnmount() {
      removeEventListener('transitionend', this.set);
    }
    click = () => {
      this.setState({
        isClick: true
      });
      const { handlerClick } = this.props;
      handlerClick();
    };
    render() {
      return <WrappedComponent click={this.click} {...this.props} isClick={this.state.isClick} />;
    }
  };

export default buttonState;
