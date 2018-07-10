import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
  }

  addToast = () => {
    this.setState({
      toasts: this.state.toasts.concat(setTimeout(this.deleteFirstToast, this.props.duration))
    });
  };
  deleteFirstToast = () => {
    this.setState({
      toasts: this.state.toasts.filter((el, indx) => indx !== 0 && el)
    });
  };
  render() {
    const { width, height } = this.props;
    const { toasts } = this.state;
    return (
      <div>
        <button onClick={this.addToast}>add</button>
        {toasts.map((el, indx) => (
          <Div index={indx} key={indx} width={width} height={height}>
            {this.props.children}
          </Div>
        ))}
      </div>
    );
  }
}
Toast.propTypes = {
  children: PropTypes.any,
  duration: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};
Toast.defaultProps = {
  duration: 3000,
  width: 100,
  height: 50
};
const enter = keyframes`
  0%{
    transform: translateY(50px);
    opacity: 0.2;
  }
  20%{
    opacity: 0.8;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;
const Div = styled.div`
  position: fixed;
  top: ${props => 50 + props.index * (props.height + 10)}px;
  right: 100px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #000000aa;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: ${enter} 0.8s;
`;
export default Toast;
