import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const animationID = 'transitiongroup';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  onRemove = id => () => {
    if (id) {
      const { items } = this.state;
      this.setState({
        items: items.filter(itemId => itemId !== id)
      });
    }
  };

  onAdd = () => {
    const { items } = this.state;
    this.setState(
      {
        items: items.concat(items[0] ? Math.max(...items) + 1 : 1)
      },
      () => {
        const { items } = this.state;
        setTimeout(this.onRemove(items[items.length - 1]), this.props.duration);
      }
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
            {items.map(id => (
              <Animation key={id} className={animationID} timeout={800}>
                <Div width={width} height={height} onClick={this.onRemove(id)}>
                  {this.props.children}
                </Div>
              </Animation>
            ))}
          </TransitionGroup>
        </Wrapper>
      </div>
    );
  }
}

const CSSTransitionComponent = ({ className, children, ...props }) => (
  <CSSTransition classNames={className} className={className} {...props}>
    {children}
  </CSSTransition>
);

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

const Div = styled.div`
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
`;
const Animation = styled(CSSTransitionComponent)`
  &-enter {
    transform: translateY(50px);
    opacity: 0.2;
  }
  &-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 800ms ease-in;
  }
  &-exit {
    transform: translateX(0);
    opacity: 1;
  }
  &-exit-active {
    transform: translateX(50px);
    opacity: 0.01;
    transition: all 400ms ease-in;
  }
`;

export default Toast;
