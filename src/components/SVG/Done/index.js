import React from 'react';
import PropTypes from 'prop-types';

const Done = ({ color, size, ...otherProps }) => (
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
    <g id="Header_x2F_BG" display="none">
      <rect x="-50" y="-314" display="inline" fill="#F1F1F2" width="520" height="520" />
    </g>
    <g id="Bounding_Boxes">
      <g id="ui_x5F_spec_x5F_header_copy_3" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </g>
    <g id="Rounded" display="none">
      <g id="ui_x5F_spec_x5F_header_copy_5" display="inline" />
      <path
        display="inline"
        d="M9,16.2l-3.5-3.5c-0.39-0.39-1.01-0.39-1.4,0l0,0c-0.39,0.39-0.39,1.01,0,1.4l4.19,4.19
		c0.39,0.39,1.02,0.39,1.41,0L20.3,7.7c0.39-0.39,0.39-1.01,0-1.4l0,0c-0.39-0.39-1.01-0.39-1.4,0L9,16.2z"
      />
    </g>
    <g id="Sharp">
      <g id="ui_x5F_spec_x5F_header_copy_4" />
      <path d="M9,16.2L4.8,12l-1.4,1.4L9,19L21,7l-1.4-1.4L9,16.2z" />
    </g>
    <g id="Outline" display="none">
      <g id="ui_x5F_spec_x5F_header" display="inline" />
      <path display="inline" d="M9,16.2L4.8,12l-1.4,1.4L9,19L21,7l-1.4-1.4L9,16.2z" />
    </g>
    <g id="Duotone" display="none">
      <g id="ui_x5F_spec_x5F_header_copy_2" display="inline" />
      <path display="inline" d="M9,16.2L4.8,12l-1.4,1.4L9,19L21,7l-1.4-1.4L9,16.2z" />
    </g>
    <g id="Fill" display="none">
      <g id="ui_x5F_spec_x5F_header_copy" display="inline" />
      <path display="inline" d="M9,16.2L4.8,12l-1.4,1.4L9,19L21,7l-1.4-1.4L9,16.2z" />
    </g>
    <g id="nyt_x5F_exporter_x5F_info" display="none" />
  </svg>
);

Done.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Done.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Done;
