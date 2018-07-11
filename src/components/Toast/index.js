import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transition from 'styled-transition-group';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  onRemove = i => () => {
    const items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  };
  onAdd = () => {
    const { items } = this.state;
    this.setState(
      {
        items: items.concat(items[0] ? Math.max(...items) + 1 : 1)
      },
      () => setTimeout(this.onRemove(items[items.length]), this.props.duration)
    );
  };

  render() {
    const { width, height } = this.props;
    const { items } = this.state;
    return (
      <div>
        <button onClick={this.onAdd}>add</button>
        <Wrapper>
          <TransitionGroup>
            {items.map((id, i) => (
              <Div key={id} width={width} height={height} timeout={800} onClick={this.onRemove(i)}>
                {this.props.children}
              </Div>
            ))}
          </TransitionGroup>
        </Wrapper>
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
const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 100px;
`;
const Div = transition.div.attrs({
  unmountOnExit: true,
  timeout: 800
})`
  margin-bottom: 10px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #000000aa;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:enter { 
    transform: translateY(50px);
    opacity: 0.2;
  }
  &:enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 800ms ease-in;
  }
  &:exit { 
    transform: translateY(0);
    opacity: 1;
  }
  &:exit-active {
    transform: translateY(-50px);
    opacity: 0;
    transition: all 600ms ease-in;
  }
`;

export default Toast;
