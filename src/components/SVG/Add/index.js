import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ color, size, ...otherProps }) => (
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
      <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
    </g>
  </svg>
);

Add.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Add.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Add;
