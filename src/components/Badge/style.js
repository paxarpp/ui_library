import styled, { css } from 'styled-components';
import { Icon } from '../Icon';

export const isBlock = ({ block }) =>
  block &&
  css`
    font-weight: 300;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 2px;
    background-color: ${({ color }) => color};
  `;

export const isBadge = ({ badge }) =>
  badge &&
  css`
    font-weight: 300;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 1rem;
    background-color: ${({ color }) => color};
  `;

export const Span = styled.span`
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
