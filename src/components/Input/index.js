import React from 'react';
import styled from 'styled-components';

const Input = ({ ...props }) => {
  return <Wrapper {...props} />;
};
const Wrapper = styled.input`
  ::-webkit-input-placeholder {
    color: #d1d1d1;
  }
  ::-moz-placeholder {
    color: #d1d1d1;
  }
  :-ms-input-placeholder {
    color: #d1d1d1;
  }
  ::placeholder {
    color: #d1d1d1;
  }

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
`;

export default Input;
