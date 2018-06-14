import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class ButtonMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false
    };
  }
  componentDidMount() {
    addEventListener('transitionend', this.set);
  }
  set = () => {
    this.setState({
      isClick: false
    });
  };
  componentWillUnmount() {
    removeEventListener('transitionend', this.set);
  }
  click = () => {
    this.setState({
      isClick: true
    });
    const { onClick } = this.props;
    onClick();
  };
  render() {
    const { children, small, large } = this.props;
    const { isClick } = this.state;
    return (
      <Main onClick={this.click} isClick={isClick} small={small} large={large}>
        {children}
      </Main>
    );
  }
}

ButtonMain.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  large: PropTypes.bool,
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
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${props => (props.isClick ? '#aaa' : '#2bbbad')};
  }
`;
