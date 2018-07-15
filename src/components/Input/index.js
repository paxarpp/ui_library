import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class Input extends Component {
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
    const { placeholder, regexp, ...props } = this.props;
    const { value } = this.state;
    const right = regexp !== '' && value !== '' ? this.props.regexp.test(value) : true;
    return (
      <Wrapper>
        <InpWrap {...props} onChange={this.changeValue} value={value} right={right} />
        <LabelWrap value={value}>{placeholder}</LabelWrap>
        {regexp !== '' && value !== '' ? <Span right={right}>{right ? 'right' : 'error'}</Span> : null}
      </Wrapper>
    );
  }
}
Input.propTypes = {
  placeholder: PropTypes.string,
  regexp: PropTypes.string
};
Input.defaultProps = {
  regexp: ''
};

const InpWrap = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow 0.3s, border 0.3s;
  :disabled {
    border-bottom: 1px dotted rgba(0, 0, 0, 0.42);
  }
  :disabled + label {
    color: rgba(0, 0, 0, 0.42);
  }
  :focus + label {
    top: 0;
    font-size: 0.7rem;
    color: #26a69a;
  }
  :focus {
    border-bottom: 1px solid ${props => (props.right ? '#26a69a' : '#f44336')};
    box-shadow: 0 1px 0 0 ${props => (props.right ? '#26a69a' : '#f44336')};
  }
`;
const LabelWrap = styled.label`
  position: absolute;
  top: ${props => (props.value ? '0' : '1rem')};
  font-size: ${props => (props.value ? '0.7rem' : '1rem')};
  left: 0;
  color: #9e9e9e;
  transition: all 0.3s;
`;
const Wrapper = styled.div`
  position: relative;
`;
const isError = props =>
  !props.right
    ? css`
        color: #f44336;
      `
    : css`
        color: #26a69a;
      `;
const Span = styled.span`
  opacity: 1;
  position: absolute;
  bottom: -10px;
  left: 0;
  ${isError};
`;
export default Input;
