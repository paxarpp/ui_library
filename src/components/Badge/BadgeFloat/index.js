import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const BadgeFloat = ({ count, ...props }) => <Span {...props}>{count}</Span>;
BadgeFloat.propTypes = {
  /** value on the screen */
  count: PropTypes.number,
  /** color background */
  color: PropTypes.string,
  /** ripple effect */
  pulse: PropTypes.bool
};

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
`;

const isPulse = props =>
  props.pulse &&
  css`
    overflow: visible;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: inherit;
      border-radius: inherit;
      animation: ${pulseAnimation} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
      z-index: 0;
    }
  `;

const Span = styled.span`
  min-width: 2.1rem;
  padding: 6px;
  margin-left: 14px;
  text-align: center;
  line-height: 22px;
  float: right;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 50%;
  background-color: #26a69a;
  background-color: ${({ color }) => color};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  ${isPulse};
`;

export default BadgeFloat;
