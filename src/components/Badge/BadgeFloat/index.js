import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BadgeFloat = ({ count, ...props }) => <Span {...props}>{count}</Span>;
BadgeFloat.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string
};
const Span = styled.span`
  min-width: 2.1rem;
  padding: 6px;
  margin-left: 14px;
  text-align: center;
  line-height: 22px;
  float: right;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 50%;
  background-color: ${props => (props.red ? 'red' : '#26a69a')};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export default BadgeFloat;
