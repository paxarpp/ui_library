import React from 'react';
import styled, { keyframes } from '@reshadow/styled';
import PropTypes from 'prop-types';

const Indeterminate = ({ color = '#26a69a' }) => (
  <Wrapper>
    <Determ color={color} />
  </Wrapper>
);
Indeterminate.propTypes = {
  color: PropTypes.string
};
const Wrapper = styled.div`
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #acece6;
  border-radius: 2px;
  margin: 0.5rem 0 1rem 0;
  overflow: hidden;
`;
const indeterminate = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;
const indeterminateShort = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;
const Determ = styled.div`
  background-color: ${({ color }) => color};
  :before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  :after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    animation: ${indeterminateShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`;
export default Indeterminate;
