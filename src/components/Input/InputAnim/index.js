import React, { Component } from 'react';
import styled, { css } from 'styled-components';
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
    const { placeholder, width } = this.props;
    const { value } = this.state;
    const disable = value !== '';
    return (
      <Wrapper>
        <Div>
          <Input type="search" onChange={this.changeValue} value={value} disable={disable} width={width} />
          <Span disable={disable}>{placeholder}</Span>
        </Div>
      </Wrapper>
    );
  }
}
InputAnim.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.number
};
InputAnim.defaultProps = {
  placeholder: 'search',
  width: 10
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
const isDisable = props =>
  props.disable &&
  css`
    left: ${({ width }) => width + 5}rem;
  `;
const Span = styled.span`
  position: absolute;
  top: 0;
  left: -3rem;
  font-size: 1rem;
  line-height: 2rem;
  transition: all 0.4s ease-in-out;
  ${isDisable};
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
    width: ${({ width }) => width}rem;
    border: 1px solid #26a69a;
  }
  :focus + span {
    left: 1rem;
    ${isDisable};
  }
`;
export default InputAnim;
