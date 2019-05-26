import React from 'react';
import { Span, WrapperIcon } from './style';
import { IProps } from './interface';

const Badge = ({ count, handler, color = '#26a69a', ...props }: IProps) => (
  <Span color={color} {...props} onClick={handler ? handler : undefined} badge={!!handler}>
    {count}
    {handler ? <WrapperIcon name={'clear'} size={'11px'} /> : null}
  </Span>
);

export default Badge;
