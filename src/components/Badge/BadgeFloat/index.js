import React from 'react';
import { Span } from './style';
import PropTypes from 'prop-types';

const BadgeFloat = ({ count, ...props }) => <Span {...props}>{count}</Span>;

BadgeFloat.propTypes = {
  /** value on the screen */
  count: PropTypes.number,
  /** color background */
  color: PropTypes.string,
  /** ripple effect */
  pulse: PropTypes.bool
};

export default BadgeFloat;
