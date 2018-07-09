import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Determinate = ({ width = '50', color = '#26a69a' }) => (
  <Wrapper>
    <Determ width={width} color={color} />
  </Wrapper>
);
Determinate.propTypes = {
  width: PropTypes.number,
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
const Determ = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ width }) => width}%;
  background-color: ${({ color }) => color};
  transition: width 0.3s linear;
`;
export default Determinate;
