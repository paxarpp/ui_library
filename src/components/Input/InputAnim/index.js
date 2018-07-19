import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class InputAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  changeValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { placeholder } = this.props;
    return (
      <Wrapper>
        <Div>
          <Input type="search" />
          <Span>{placeholder}</Span>
        </Div>
      </Wrapper>
    );
  }
}
InputAnim.propTypes = {
  placeholder: PropTypes.string
};
const Div = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -1rem;
    width: 1rem;
    height: 1rem;
    border-left: 2px solid #9e9e9e;
    transform: rotate(-45deg);
  }
  :focus-within ::after {
    height: 0;
  }
`;
const Span = styled.span`
  position: absolute;
  top: 0;
  left: -2rem;
  font-size: 1rem;
  line-height: 2rem;
  transition: all 0.4s ease-in-out;
`;
const Input = styled.input`
  width: 2rem;
  background-color: transparent;
  border: 1px solid #9e9e9e;
  border-radius: 1rem;
  outline: none;
  height: 2rem;
  font-size: 1rem;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;
  :focus {
    width: 100%;
    border: 1px solid #26a69a;
  }
  :focus + span {
    left: 1rem;
  }
`;
export default InputAnim;
