import React from 'react';
import PropTypes from 'prop-types';

const ThumbUp = ({ color, size, ...otherProps }) => (
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
        <polygon points="14.17,1 7,8.18 7,21 19.31,21 23,12.4 23,8 14.69,8 15.81,2.62 		" />
        <rect x="1" y="9" width="4" height="12" />
      </g>
    </g>
  </svg>
);

ThumbUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbUp;
