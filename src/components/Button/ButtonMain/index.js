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
  onClick = () => {
    this.setState({
      isClick: true
    });

    const { onClick } = this.props;
    onClick();
  };
  render() {
    const { children } = this.props;
    const { isClick } = this.state;
    return (
      <Main onClick={this.onClick} isClick={isClick}>
        {children}
      </Main>
    );
  }
}

ButtonMain.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

const Main = styled.button`
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
  background-color: ${props => (props.isClick ? '#000' : '#2bbbad')};
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  outline: none;
`;
