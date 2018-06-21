import React from 'react';
import PropTypes from 'prop-types';

const TransferWithin = ({ color, size, ...otherProps }) => (
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
      <g>
        <path d="M16.49,15.5v-1.75L14,16.25l2.49,2.5V17H22v-1.5H16.49z" />
        <path d="M19.51,19.75H14v1.5h5.51V23L22,20.5L19.51,18V19.75z" />
        <g>
          <path
            d="M9.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S8.4,5.5,9.5,5.5z M5.75,8.9L3,23h2.1l1.75-8L9,17v6h2v-7.55L8.95,13.4
				l0.6-3C10.85,12,12.8,13,15,13v-2c-1.85,0-3.45-1-4.35-2.45L9.7,6.95C9.35,6.35,8.7,6,8,6C7.75,6,7.5,6.05,7.25,6.15L2,8.3V13h2
				V9.65L5.75,8.9"
          />
        </g>
      </g>
    </g>
  </svg>
);

TransferWithin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TransferWithin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TransferWithin;
