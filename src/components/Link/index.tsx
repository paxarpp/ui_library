import React from 'react';
import { IProps } from './interface';
import { Wrapper } from './style';

const Link = ({ url, children, color = '#26a69a', ...props }: IProps) => (
  <Wrapper href={url} {...props} color={color}>
    {children}
  </Wrapper>
);

export default Link;
