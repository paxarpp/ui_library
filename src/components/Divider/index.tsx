import React from 'react';
import { Wrap } from './style';
import { IDivider } from './interface';

const Divider = ({ children, max, end, start }: IDivider) => (
  <Wrap max={max} end={end} start={start}>
    {children}
  </Wrap>
);

export default Divider;
