import React from 'react';
import PropTypes from 'prop-types';

const Clear = ({ color, size, ...otherProps }) => (
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
      <g id="ui_x5F_spec_x5F_header_copy_3" display="none" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </g>
    <g id="Sharp">
      <g id="ui_x5F_spec_x5F_header_copy_4" display="none" />
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z" />
    </g>
  </svg>
);

Clear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clear;
