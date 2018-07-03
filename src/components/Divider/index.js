import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Divider = ({ ...props }) => <Wrap {...props} />;
const Wrap = styled.div`
  height: 1px;
  overflow: hidden;
  background-color: #e0e0e0;
  margin: 0 auto;
  width: ${props => (props.max ? '100%' : '80%')};
`;
Divider.propTypes = {
  max: PropTypes.bool
};
export default Divider;
