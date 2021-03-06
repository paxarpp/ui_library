import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Divider = ({ children, max, end, start }) => (
  <Wrap max={max} end={end} start={start}>
    {children}
  </Wrap>
);
Divider.propTypes = {
  /** width = 100% */
  max: PropTypes.bool,
  /** what render on divider (text etc) */
  children: PropTypes.any,
  /** children located in the end divider */
  end: PropTypes.bool,
  /** children located in the start divider */
  start: PropTypes.bool
};
const style = css`
  content: '';
  background-color: #e0e0e0;
  height: 1px;
  flex: 1;
`;
const Wrap = styled.h4`
  display: flex;
  margin: 0 auto;
  width: ${props => (props.max ? '100%' : '80%')};
  align-items: center;
  :after {
    ${style};
    flex: ${props => props.start && '20'};
  }
  :before {
    ${style};
    flex: ${props => props.end && '20'};
  }
`;
export default Divider;
