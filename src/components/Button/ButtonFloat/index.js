import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import buttonState from '../../../HOC/buttonState';

const enhance = buttonState();

const ButtonFloat = ({ children, click, ...props }) => (
  <Main onClick={click} {...props}>
    {children}
  </Main>
);

ButtonFloat.propTypes = {
  click: PropTypes.func,
  children: PropTypes.string,
  large: PropTypes.bool,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool
};

const large = `
  height: 56px;
  width: 56px;
  :before {
    top: -13px;
    left: 8px;
    width: 40px;
    height: 40px;
    border-bottom: 3px solid #fff;
  }
  :after {
    top: 8px;
    left: 26px;
    width: 40px;
    height: 40px;
    border-left: 3px solid #fff;
  }
`;

const small = `
  height: 32px;
  width: 32px;
  :before {
    top: -7px;
    left: 5px;
    width: 22px;
    height: 22px;
    border-bottom: 2px solid #fff;
  }
  :after {
    top: 5px;
    left: 15px;
    height: 22px;
    width: 22px;
    border-left: 2px solid #fff;
  }
`;
const norm = `
  height: 40px;
  width: 40px;
  :before {
    top: -9px;
    left: 6px;
    width: 28px;
    height: 28px;
    border-bottom: 2px solid #fff;
  }
  :after {
    top: 6px;
    left: 19px;
    width: 28px;
    height: 28px;
    border-left: 2px solid #fff;
  }
`;
const Main = styled.button`
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 0;
  background-color: #26a69a;
  background-color: ${props => props.danger && '#ff5454'};
  background-color: ${props => props.second && '#aaa'};
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
  vertical-align: middle;
  border: none;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  ${props => !props.large && !props.small && norm};
  ${props => props.large && large};
  ${props => props.small && small};
  :hover {
    background-color: ${props =>
      props.isClick ? '#aaa' : (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
  :before {
    content: ' ';
    position: absolute;
  }
  :after {
    content: ' ';
    position: absolute;
  }
`;

export default enhance(ButtonFloat);
