import styled, { css, keyframes } from '@reshadow/styled';
import { commonStyle } from '../style';

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

const isPulse = ({ pulse }) =>
  pulse &&
  css`
    overflow: visible;
    position: relative;
    :before {
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

export const Span = styled.span`
  margin-left: 14px;
  text-align: center;
  box-sizing: border-box;
  float: right;
  line-height: 22px;
  min-width: 2.1rem;
  padding: 6px;
  ${commonStyle}
  border-radius: 50%;
  background-color: ${({ color = '#26a69a' }) => color};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  ${isPulse};
`;
