import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import buttonState from '../HOC/buttonState';

const enhance = buttonState();

const ButtonMain = ({ children, click, disable, ...props }) => (
  <Main onClick={disable ? null : click} {...props} disable={disable}>
    {children}
  </Main>
);

ButtonMain.propTypes = {
  click: PropTypes.func || PropTypes.bool,
  children: PropTypes.string,
  large: PropTypes.bool,
  second: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  disable: PropTypes.bool
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
  background-color: ${props => props.disable && '#e5e5e5'};
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-out;
  cursor: ${props => !props.disable && 'pointer'};
  outline: none;
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
`;

export default enhance(ButtonMain);
