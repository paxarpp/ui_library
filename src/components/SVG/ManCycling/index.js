import React from 'react';
import PropTypes from 'prop-types';

const ManCycling = ({ color, size, ...otherProps }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 612 612"
    fill={color}
    {...otherProps}
  >
    <g>
      <g id="directions-bike">
        <path
          d="M408,132.6c25.5,0,45.9-20.4,45.9-45.9S433.5,40.8,408,40.8s-45.9,20.4-45.9,45.9S382.5,132.6,408,132.6z M484.5,316.2
			c-71.4,0-127.5,56.1-127.5,127.5s56.1,127.5,127.5,127.5S612,515.101,612,443.7S555.9,316.2,484.5,316.2z M484.5,532.95
			c-48.45,0-89.25-40.801-89.25-89.25c0-48.451,40.8-89.25,89.25-89.25s89.25,40.799,89.25,89.25
			C573.75,492.149,532.95,532.95,484.5,532.95z M377.4,265.2h107.1v-45.9h-81.6l-48.45-84.15c-7.65-12.75-20.4-20.4-38.25-20.4
			c-12.75,0-22.95,5.1-30.6,12.75l-94.35,94.35c-7.65,7.65-12.75,17.85-12.75,30.6c0,15.3,7.65,30.6,20.4,38.25l86.7,51v127.5h45.9
			V303.45l-56.1-43.35l58.65-58.65L377.4,265.2z M127.5,316.2C56.1,316.2,0,372.3,0,443.7s56.1,127.5,127.5,127.5
			S255,515.101,255,443.7S198.9,316.2,127.5,316.2z M127.5,532.95c-48.45,0-89.25-40.801-89.25-89.25
			c0-48.451,40.8-89.25,89.25-89.25s89.25,40.799,89.25,89.25C216.75,492.149,175.95,532.95,127.5,532.95z"
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

ManCycling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ManCycling.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ManCycling;
