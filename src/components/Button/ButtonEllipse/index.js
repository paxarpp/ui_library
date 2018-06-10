import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonEllipse = ({ onClick, children }) => <Ellipse onClick={onClick}>{children}</Ellipse>;

ButtonEllipse.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

const Ellipse = styled.a`
  position: fixed;
  z-index: 9999999;
  top: 10%;
  right: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 95px;
  background-color: #3f51b5;
  border-radius: 50%;
  box-shadow: 0px 3px 6.7px 0.3px rgba(0, 0, 0, 0.35);
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.8px;
  color: #ffffff;
  cursor: pointer;
`;

export default ButtonEllipse;
