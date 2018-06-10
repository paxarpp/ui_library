import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonEllipse = ({ onClick, children }) => <Ellipse onClick={onClick}>{children}</Ellipse>;

ButtonEllipse.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

const Ellipse = styled.button`
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  :focus {
    background-color: #1d7d74;
  }
`;

export default ButtonEllipse;
