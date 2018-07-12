import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SwitchM = ({ disabled, click }) => <Input type="checkbox" onChange={() => click} disabled={disabled} />;
SwitchM.propTypes = {
  click: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};
const Input = styled.input`
  appearance: none;
  width: 3em;
  height: 1.5em;
  border-radius: 1.5em;
  background-color: #ddd;
  outline: 0;
  cursor: pointer;
  transition: background-color 0.09s ease-in-out;
  position: relative;
  :checked {
    background-color: #3af;
  }
  :after {
    content: '';
    width: 1.5em;
    height: 1.5em;
    background-color: white;
    border-radius: 3em;
    position: absolute;
    transform: scale(0.7);
    left: 0;
    transition: left 0.09s ease-in-out;
    box-shadow: 0 0.1em rgba(0, 0, 0, 0.5);
  }
  :checked::after {
    left: 1.5em;
  }
`;
export default SwitchM;
