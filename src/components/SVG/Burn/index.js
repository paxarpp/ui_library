import React from 'react';
import PropTypes from 'prop-types';

const Burn = ({ color, size, ...otherProps }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 510 510"
    fill={color}
    {...otherProps}
  >
    <g>
      <g id="whatshot">
        <path
          d="M293.25,0c0,0,15.3,63.75,15.3,114.75c0,48.45-33.149,89.25-81.6,89.25s-86.7-40.8-86.7-89.25v-7.65
			c-48.45,58.65-76.5,132.6-76.5,211.65C63.75,423.3,150.45,510,255,510s191.25-86.7,191.25-191.25
			C446.25,188.7,387.6,73.95,293.25,0z M255,433.5c-43.35,0-76.5-33.15-76.5-73.95c0-38.25,25.5-66.3,66.3-73.95
			c43.351-7.649,86.7-28.05,109.65-61.2c10.2,30.6,15.3,63.75,15.3,96.9C369.75,382.5,318.75,433.5,255,433.5z"
        />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

Burn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Burn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Burn;
