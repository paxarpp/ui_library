import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Preloader3 = ({ size = '14px', color = 'grey', bgColor = '#fff' }) => (
  <Wrapper size={size} color={color} bgColor={bgColor} />
);
Preloader3.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
};
const load3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  font-size: ${props => props.size};
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${props => props.color};
  background: linear-gradient(to right, ${props => props.color} 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load3} 1.4s infinite linear;
  transform: translateZ(0);
  :before {
    width: 50%;
    height: 50%;
    background: ${props => props.color};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  :after {
    background: ${props => props.bgColor};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Preloader3;
