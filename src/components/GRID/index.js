import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GRID = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;
GRID.propTypes = {
  children: PropTypes.any,
  col: PropTypes.number
};

const Wrapper = styled.div`
  display: grid;
  width: 800px;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-template-rows: ${props => props.height};
  grid-gap: ${props => props.gap};
`;
Wrapper.defaultProps = {
  col: 12,
  height: 'auto',
  gap: '1rem'
};
export default GRID;
