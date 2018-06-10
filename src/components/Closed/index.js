import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Closed = ({ handler }) => <Wrapper onClick={handler}>X</Wrapper>;

const Wrapper = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  text-align: center;
  color: #000;
  cursor: pointer;
`;
Closed.propTypes = {
  handler: PropTypes.func.isRequired
};

export default Closed;
