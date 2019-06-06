import React from 'react';
import { Main } from './style';
import { Icon } from '../../Icon';

const ButtonFloat = ({ children, handlerClick, disable, className, ...props }) => (
  <Main onClick={disable ? null : handlerClick} {...props} disable={disable} className={className}>
    {children ? children : <Icon name="add" />}
  </Main>
);

export default ButtonFloat;
