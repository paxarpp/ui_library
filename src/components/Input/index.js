import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder, ...props }) => {
  return (
    <Wrapper>
      <InpWrap {...props} />
      <LabelWrap>{placeholder}</LabelWrap>
    </Wrapper>
  );
};
const InpWrap = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow 0.3s, border 0.3s;
  :disabled {
    color: rgba(0, 0, 0, 0.42);
    border-bottom: 1px dotted rgba(0, 0, 0, 0.42);
  }
  :focus + label {
    top: 0;
    font-size: 0.7rem;
    color: #26a69a;
  }
  :focus {
    border-bottom: 2px solid #26a69a;
  }
`;
const LabelWrap = styled.label`
  position: absolute;
  top: 1rem;
  left: 0;
  transition: all 0.3s;
`;
const Wrapper = styled.div`
  position: relative;
`;

export default Input;
