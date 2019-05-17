import React from 'react';
import { Span, WrapperIcon } from './style';
import PropTypes from 'prop-types';

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

export default Badge;
