import React from 'react';
import PropTypes from 'prop-types';

const Routes = ({ color, size, ...otherProps }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 480 480"
    fill={color}
    {...otherProps}
  >
    <g>
      <g>
        <path
          d="M264,160V96h139.312l32-32l-32-32H264v-8c0-13.255-10.745-24-24-24s-24,10.745-24,24v72H76.688l-32,32l32,32H216v64
			H76.688l-32,32l32,32H216v176h-16v16h80v-16h-16V224h139.312l32-32l-32-32H264z M264,48h132.688l16,16l-16,16H264V48z M216,272
			H83.312l-16-16l16-16H216V272z M216,144H83.312l-16-16l16-16H216V144z M248,464h-16V24c0-4.418,3.582-8,8-8s8,3.582,8,8V464z
			M396.688,208H264v-32h132.688l16,16L396.688,208z"
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

Routes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Routes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Routes;
