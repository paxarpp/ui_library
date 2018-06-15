import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ onClick, children }) => <Wrapper onClick={onClick}>{children}</Wrapper>;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

const Wrapper = styled.a`
  cursor: pointer;
  text-align: center;
  padding: 6px 10px;
  background-color: #ffc23c;
  border-radius: 8px;
  font-size: 16px;
  transition: box-shadow 0.2s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  :hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
