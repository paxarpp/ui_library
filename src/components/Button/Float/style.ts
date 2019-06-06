import styled, { css, keyframes } from 'styled-components';
import { IMain, IProps } from './interface';

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

const isLarge = ({ large }: IProps) =>
    large &&
    css`
  height: 56px;
  width: 56px;
`;

const isSmall = ({ small }: IProps) =>
    small &&
    css`
  height: 32px;
  width: 32px;
`;

const isPulse = ({ pulse }: IProps) =>
    pulse &&
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
    transition: opacity 0.3s, transform 0.3s;
    animation: ${pulseAnimation} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    z-index: -1;
  }
`;

export const Main = styled.button<IMain>`
position: relative;
overflow: hidden;
display: inline-block;
color: #fff;
overflow: hidden;
z-index: 1;
padding: 0;
background-color: #26a69a;
background-color: ${props => props.danger && '#ff5454'};
background-color: ${props => props.second && '#aaa'};
background-color: ${props => props.disable && '#e5e5e5'};
background-color: ${props => props.color};
border-radius: 50%;
transition: background-color 0.3s;
cursor: ${props => !props.disable && 'pointer'};
vertical-align: middle;
border: none;
outline: none;
height: 40px;
width: 40px;
${isLarge};
${isSmall};
${props =>
        !props.disable &&
        'box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'};
:hover {
  ${props => !props.disable && 'background-color:'} ${props =>
        (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
  ${props =>
        !props.disable &&
        'box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)'};
}
${isPulse};
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
  animation: ${props => !props.disable && ripple} 1s ease-out;
}
`;
