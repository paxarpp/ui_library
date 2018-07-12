import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const ButtonMain = ({ children, handlerClick, disable, className, ...props }) => (
  <Main onClick={disable ? null : handlerClick} {...props} disable={disable} className={className}>
    {children}
  </Main>
);

ButtonMain.propTypes = {
  handlerClick: PropTypes.func || PropTypes.bool,
  children: PropTypes.any,
  large: PropTypes.bool,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  disable: PropTypes.bool,
  /** для совместимости */
  className: PropTypes.string
};
const ripple = keyframes`
  0% {
    background-color: #2bbbad;
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    background-color: #2bbbad;
    opacity: 0;
    transform: scale(40, 40);
  }
}
`;
const rippleRed = keyframes`
  0% {
    background-color: red;
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    background-color: red;
    opacity: 0;
    transform: scale(40, 40);
  }
}
`;
const rippleSec = keyframes`
  0% {
    background-color: #aab;
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    background-color: #aab;
    opacity: 0;
    transform: scale(40, 40);
  }
}
`;
const isLarge = props =>
  props.large &&
  css`
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    padding: 0 28px;
  `;

const isSmall = props =>
  props.small &&
  css`
    height: 32px;
    line-height: 32px;
    font-size: 13px;
    padding: 0 14px;
  `;
const isDisable = props =>
  props.disable &&
  css`
    pointer-events: none;
    background-color: #dfdfdf !important;
    box-shadow: none;
    color: #9f9f9f !important;
    cursor: default;
  `;
const Main = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
  ${isLarge};
  ${isSmall};
  text-transform: uppercase;
  vertical-align: middle;
  color: #343434;
  background-color: transparent;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: ${props => !props.disable && 'pointer'};
  outline: none;
  ${isDisable};
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  :focus:not(:active):after {
    animation: ${props => (!props.disable && props.danger ? rippleRed : props.second ? rippleSec : ripple)} 1s ease-out;
  }
`;

export default ButtonMain;
