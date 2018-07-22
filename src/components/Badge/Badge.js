import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Badge = ({ count, color = '#26a69a', ...props }) => (
  <Span color={color} {...props}>
    {count}
  </Span>
);
Badge.propTypes = {
  /** value on the screen */
  count: PropTypes.number,
  /** value in the block */
  block: PropTypes.bool,
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
const Span = styled.span`
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
`;

export default Badge;
