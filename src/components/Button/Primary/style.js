import styled, { css, keyframes } from 'styled-components';

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
`;

const isLarge = ({ large }) =>
  large &&
  css`
    height: 54px;
    font-size: 16px;
    padding: 0 28px;
  `;

const isSmall = ({ small }) =>
  small &&
  css`
    height: 32px;
    font-size: 13px;
    padding: 0 14px;
  `;

const isShadow = ({ disable, border, bottom }) =>
  !disable &&
  !border &&
  !bottom &&
  css`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  `;

const isShadowHover = ({ disable, border, bottom }) =>
  !disable &&
  !border &&
  !bottom &&
  css`
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  `;

export const Main = styled.button`
  position: relative;
  overflow: hidden;
  border: ${({ border }) => (border ? '2px solid #aaa' : 'none')};
  box-sizing: border-box;
  border-radius: ${({ rounded }) => (rounded ? '25px' : '2px')};
  display: inline-block;
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  ${isLarge};
  ${isSmall};
  text-transform: uppercase;
  vertical-align: middle;
  text-decoration: none;
  color: ${({ border }) => (border ? 'inherit' : '#fff')};
  background-color: #26a69a;
  background-color: ${({ danger }) => danger && '#ff5454'};
  background-color: ${({ second }) => second && '#aaa'};
  background-color: ${({ disable }) => disable && '#e5e5e5'};
  background-color: ${({ color }) => color};
  background-color: ${({ border }) => border && 'transparent'};
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-out;
  cursor: ${({ disable }) => !disable && 'pointer'};
  outline: none;
  ${isShadow};
  :hover {
    ${props => !props.disable && !props.border && 'background-color:'} ${props =>
      (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
    ${isShadowHover};
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
    animation: ${({ disable, border }) => !disable && !border && ripple} 1s ease-out;
  }
`;
