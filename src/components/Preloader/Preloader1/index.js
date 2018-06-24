import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Preloader1 = ({ size = '14px', color = 'grey' }) => <Wrapper size={size} color={color} />;
Preloader1.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};
const load1 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;
const style = `
  background: transparent;
  -webkit-animation: ${load1} 1s infinite ease-in-out;
  animation: ${load1} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
`;
const Wrapper = styled.div`
  ${style};
  color: ${props => props.color};
  font-size: ${props => props.size};
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  :before,
  :after {
    ${style};
    content: '';
    position: absolute;
    top: 0;
  }
  :before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  :after {
    left: 1.5em;
  }
`;

export default Preloader1;
