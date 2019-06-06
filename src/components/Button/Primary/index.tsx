import React from 'react';
import { Main } from './style';
import { IProps } from './interface';

const ButtonMain = ({ children, handlerClick, disable, className, ...props }: IProps) => (
  <Main onClick={disable ? undefined : handlerClick} disable={disable} {...props} className={className}>
    {children}
  </Main>
);

export default ButtonMain;
