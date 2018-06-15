import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import buttonState from '../../../HOC/buttonState';

const enhance = buttonState();

const ButtonMain = ({ children, click, ...props }) => (
  <Main onClick={click} {...props}>
    {children}
  </Main>
);

ButtonMain.propTypes = {
  click: PropTypes.func,
  children: PropTypes.string,
  large: PropTypes.bool,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool
};

const large = `
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  padding: 0 28px;
`;

const small = `
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  padding: 0 14px;
`;
const norm = `
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
`;
const Main = styled.button`
  border: none;
  border-radius: 2px;
  display: inline-block;
  ${props => !props.large && !props.small && norm};
  ${props => props.large && large};
  ${props => props.small && small};
  text-transform: uppercase;
  vertical-align: middle;
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  background-color: ${props => props.danger && '#ff5454'};
  background-color: ${props => props.second && '#aaa'};
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-out;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${props =>
      props.isClick ? '#aaa' : (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
  }
`;

export default enhance(ButtonMain);
