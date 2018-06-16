import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import buttonState from '../../../HOC/buttonState';

const enhance = buttonState();

const ButtonFloat = ({ children, click, disable, ...props }) => (
  <Main onClick={disable ? null : click} {...props} disable={disable}>
    {children}
  </Main>
);

ButtonFloat.propTypes = {
  click: PropTypes.func,
  children: PropTypes.string,
  large: PropTypes.bool,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  disable: PropTypes.bool
};

const large = `
  height: 56px;
  width: 56px;
  :before {
    top: 6px;
    left: 18px;
    width: 20px;
    height: 20px;
    border-bottom: 3px solid #fff;
  }
  :after {
    top: 17px;
    left: 27px;
    width: 20px;
    height: 20px;
    border-left: 3px solid #fff;
  }
`;

const small = `
  height: 32px;
  width: 32px;
  :before {
    top: -5px;
    left: 6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #fff;
  }
  :after {
    top: 6px;
    left: 15px;
    height: 20px;
    width: 20px;
    border-left: 2px solid #fff;
  }
`;
const norm = `
  height: 40px;
  width: 40px;
  :before {
    top: -1px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #fff;
  }
  :after {
    top: 10px;
    left: 19px;
    width: 20px;
    height: 20px;
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
  background-color: ${props => props.disable && '#e5e5e5'};
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: ${props => !props.disable && 'pointer'};
  vertical-align: middle;
  border: none;
  outline: none;
  ${props => !props.large && !props.small && norm};
  ${props => props.large && large};
  ${props => props.small && small};
  ${props =>
    !props.disable &&
    'box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'};
  :hover {
    ${props => !props.disable && 'background-color:'} ${props =>
      props.isClick ? '#aaa' : (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
    ${props =>
      !props.disable &&
      'box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)'};
  }
  ${props => !props.children && ':before'} {
    content: ' ';
    position: absolute;
  }
  ${props => !props.children && ':after'} {
    content: ' ';
    position: absolute;
  }
`;

export default enhance(ButtonFloat);
