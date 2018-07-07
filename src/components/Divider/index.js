import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Divider = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>;
const style = css`
  content: '';
  background-color: #e0e0e0;
  height: 0.1em;
  flex: 1;
`;
const isStart = props =>
  !props.end &&
  css`
    ${style};
  `;
const isEnd = props =>
  !props.start &&
  css`
    ${style};
  `;
const Wrap = styled.h1`
  display: flex;
  margin: 0 auto;
  width: ${props => (props.max ? '100%' : '80%')};
  align-items: center;
  :after {
    ${isStart};
  }
  :before {
    ${isEnd};
  }
`;
Divider.propTypes = {
  max: PropTypes.bool,
  children: PropTypes.any,
  end: PropTypes.bool,
  start: PropTypes.bool
};
export default Divider;
