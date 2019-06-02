import React from 'react';
import styled, { css, keyframes } from '@reshadow/styled';
import PropTypes from 'prop-types';

const Preloader7 = ({ size = '14px', color = 'grey' }) => <Wrapper size={size} color={color} />;
Preloader7.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};
const load7 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;
const style = css`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${load7} 1.8s infinite ease-in-out;
`;
const Wrapper = styled.div`
  ${style};
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  :before,
  :after {
    ${style};
    content: '';
    position: absolute;
    top: 0;
  }
  :before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  :after {
    left: 3.5em;
  }
`;

export default Preloader7;
