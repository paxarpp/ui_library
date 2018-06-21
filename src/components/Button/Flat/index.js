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
const disabledBtn = `
  pointer-events: none;
  background-color: #DFDFDF !important;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #9F9F9F !important;
  cursor: default;
`;
const Main = styled.a`
  border: none;
  border-radius: 2px;
  display: inline-block;
  ${props => !props.large && !props.small && norm};
  ${props => props.large && large};
  ${props => props.small && small};
  text-transform: uppercase;
  vertical-align: middle;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  color: #343434;
  background-color: transparent;
  text-align: center;
  letter-spacing: 0.5px;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  cursor: ${props => !props.disable && 'pointer'};
  outline: none;
  :focus {
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  :hover {
    ${props => !props.disable && 'background-color:'} ${props =>
      props.isClick ? '#aaa' : (props.danger && 'red') || (props.second && '#aab') || '#2bbbad'};
    box-shadow: none;
  }
  ${props => props.disable && disabledBtn};
`;

export default enhance(ButtonMain);
