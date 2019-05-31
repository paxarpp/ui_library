import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { IDiv, IAnimation } from './interface';

const CSSTransitionComponent = ({ className, children, ...props }: IAnimation) => (
  <CSSTransition classNames={className} className={className} {...props}>
    {children}
  </CSSTransition>
);

export const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 100px;
`;

export const Div = styled.div<IDiv>`
  margin-bottom: 10px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #000000aa;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Animation = styled(CSSTransitionComponent)`
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
