import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ButtonMain = ({ children, handlerClick, disable, border, rounded, ...props }) => (
  <Main onClick={disable ? null : handlerClick} {...props} border={border} disable={disable} rounded={rounded}>
    {children}
  </Main>
);

ButtonMain.propTypes = {
  handlerClick: PropTypes.func || PropTypes.bool,
  children: PropTypes.any,
  large: PropTypes.bool,
  color: PropTypes.string,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  disable: PropTypes.bool,
  border: PropTypes.bool,
  rounded: PropTypes.bool
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
const large = `
  height: 54px;
  font-size: 16px;
  padding: 0 28px;
`;

const small = `
  height: 32px;
  font-size: 13px;
  padding: 0 14px;
`;
const norm = `
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
`;
const Main = styled.button`
  position: relative;
  overflow: hidden;
  border: ${props => (props.border ? '2px solid #aaa' : 'none')};
  box-sizing: border-box;
  border-radius: ${props => (props.rounded ? '25px' : '2px')};
  display: inline-block;
  ${props => !props.large && !props.small && norm};
  ${props => props.large && large};
  ${props => props.small && small};
  text-transform: uppercase;
  vertical-align: middle;
  text-decoration: none;
  color: ${props => (props.border ? 'inherit' : '#fff')};
  background-color: #26a69a;
  background-color: ${props => props.danger && '#ff5454'};
  background-color: ${props => props.second && '#aaa'};
  background-color: ${props => props.disable && '#e5e5e5'};
  background-color: ${props => props.color};
  background-color: ${props => props.border && 'transparent'};
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-out;
  cursor: ${props => !props.disable && 'pointer'};
  outline: none;
  ${props =>
    !props.disable &&
    !props.border &&
    'box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'};
  :hover {
    ${props => !props.disable && !props.border && 'background-color:'} ${props =>
      (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
    ${props =>
      !props.disable &&
      !props.border &&
      'box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)'};
    ${props => !props.disable && props.border && 'border-color:'} ${props =>
      (props.danger && 'red') || (props.second && '#aab') || props.color || '#2bbbad'};
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
    animation: ${props => !props.disable && !props.border && ripple} 1s ease-out;
  }
`;

export default ButtonMain;
