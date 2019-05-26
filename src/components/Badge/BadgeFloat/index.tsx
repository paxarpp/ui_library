import React from 'react';
import { Span } from './style';
import { IProps } from './interfaces';

const BadgeFloat = ({ count, ...props }: IProps) => <Span {...props}>{count}</Span>;

export default BadgeFloat;
