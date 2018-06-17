import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Badge = ({ count, ...props }) => <Span {...props}>{count}</Span>;
Badge.propTypes = {
  count: PropTypes.number,
  block: PropTypes.bool,
  color: PropTypes.string
};

const blockStyle = `
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  
  border-radius: 2px;
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
  ${props => props.block && blockStyle};
  background-color: ${props => (props.red ? 'red' : props => (props.block ? '#26a69a' : 'inherit'))};
`;

export default Badge;
