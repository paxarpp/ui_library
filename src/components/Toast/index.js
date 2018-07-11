import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import transition from 'styled-transition-group';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
  }

  addToast = () => {
    setTimeout(this.deleteFirstToast, this.props.duration);
    this.setState({
      toasts: this.state.toasts.concat('active')
    });
  };
  deleteFirstToast = () => {
    const { toasts } = this.state;
    this.setState({
      toasts: toasts.map((el, indx) => (indx === 0 ? 'end' : 'active'))
    });
    setTimeout(this.clearFirstToast, 300);
  };
  clearFirstToast = () => {
    const { toasts } = this.state;
    this.setState({
      toasts: toasts.slice(1)
    });
  };
  render() {
    const { width, height } = this.props;
    const { toasts } = this.state;
    return (
      <div>
        <button onClick={this.addToast}>add</button>
        {toasts.map((el, indx) => (
          <Div end={el === 'end' ? true : undefined} index={indx} key={indx} width={width} height={height}>
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
const leave = keyframes`
  0%{
    transform: translateY(0);
    opacity: 1;
  }
  20%{
    opacity: 0.4;
  }
  40%{
    opacity: 0.8;
  }
  60%{
    opacity: 0.2;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    transform: translateY(-10px);
    opacity: 0;
  }
`;
const isEnd = props =>
  props.end &&
  css`
    animation: ${leave} 0.3s forwards;
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
  ${isEnd};
`;
export default Toast;
