import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ color, size, ...otherProps }) => (
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
      <path fill="none" d="M0,0h24v24H0V0z" />
    </g>
    <g id="Sharp">
      <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
    </g>
  </svg>
);

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Menu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Menu;
