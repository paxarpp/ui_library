import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const Badge = ({ count, handler, color = '#26a69a', ...props }) => (
  <Span color={color} {...props} onClick={handler ? handler : null} badge={!!handler}>
    {count}
    {handler ? <WrapperIcon name={'clear'} size={'11px'} /> : null}
  </Span>
);

Badge.propTypes = {
  /** value on the screen */
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** view the block */
  block: PropTypes.bool,
  /** view the badge and callback click */
  handler: PropTypes.func,
  /** color background */
  color: PropTypes.string
};

const isBlock = props =>
  props.block &&
  css`
    font-weight: 300;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 2px;
    background-color: ${({ color }) => color};
  `;
const isBadge = props =>
  props.badge &&
  css`
    font-weight: 300;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 1rem;
    background-color: ${({ color }) => color};
  `;

const Span = styled.span`
  position: relative;
  min-width: 3rem;
  padding: 0 6px;
  margin-left: 14px;
  text-align: center;
  font-size: 1rem;
  line-height: 22px;
  height: 22px;
  color: #757575;
  float: right;
  box-sizing: border-box;
  background-color: inherit;
  ${isBlock};
  ${isBadge};
`;

const WrapperIcon = styled(Icon)`
  position: absolute;
  top: 0.1rem;
  right: 2px;
`;

export default Badge;
