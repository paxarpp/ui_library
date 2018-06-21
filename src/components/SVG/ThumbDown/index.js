import React from 'react';
import PropTypes from 'prop-types';

const ThumbDown = ({ color, size, ...otherProps }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <g id="Bounding_Boxes">
      <g id="ui_x5F_spec_x5F_header_copy_3" />
      <path fill="none" d="M0,0h24v24H0V0z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </g>
    <g id="Sharp">
      <g id="ui_x5F_spec_x5F_header_copy_4" />
      <g>
        <polygon points="9.83,23 17,15.82 17,3 4.69,3 1,11.6 1,16 9.31,16 8.19,21.38 		" />
        <rect x="19" y="3" width="4" height="12" />
      </g>
    </g>
  </svg>
);

ThumbDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbDown;
