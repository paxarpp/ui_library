import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ButtonFloat = ({ children, handlerClick, active, ...props }) => (
  <Main onClick={handlerClick} {...props} active={active}>
    {children}
  </Main>
);
ButtonFloat.propTypes = {
  handlerClick: PropTypes.func,
  children: PropTypes.string,
  active: PropTypes.bool
};
const ripple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
`;
const Main = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-block;
  color: ${props => (props.active ? 'white' : 'black')};
  overflow: hidden;
  z-index: 1;
  padding: 0;
  background-color: ${props => (props.active ? '#26a69a' : 'transparent')};
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
  vertical-align: middle;
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
  :hover {
    background-color: ${props => (props.active ? '#2bbbad' : 'transparent')};
  }
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  :focus:not(:active)::after {
    animation: ${props => !props.active && ripple} 1s ease-out;
  }
`;

export default ButtonFloat;
