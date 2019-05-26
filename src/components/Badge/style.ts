import styled, { css } from 'styled-components';
import { Icon } from '../Icon/index.js';
import { ISpanProps } from './interface';

export const commonStyle = () => css`
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
`;

const isBlock = ({ block }: ISpanProps) =>
  block &&
  css<{ color: string }>`
    ${commonStyle}
    border-radius: 2px;
    background-color: ${({ color }) => color};
  `;

const isBadge = ({ badge }: ISpanProps) =>
  badge &&
  css<{ color: string }>`
    ${commonStyle}
    border-radius: 1rem;
    background-color: ${({ color }) => color};
  `;

export const Span = styled.span<ISpanProps>`
  margin-left: 14px;
  text-align: center;
  box-sizing: border-box;
  float: right;
  line-height: 22px;
  position: relative;
  min-width: 3rem;
  padding: 0 6px;
  font-size: 1rem;
  height: 22px;
  color: #757575;
  background-color: inherit;
  ${isBlock};
  ${isBadge};
`;

export const WrapperIcon = styled(Icon)`
  position: absolute;
  top: 0.1rem;
  right: 2px;
`;
