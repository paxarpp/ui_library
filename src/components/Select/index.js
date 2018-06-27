import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = ({ placeholder }) => (
  <Fragment>
    <Label>Materialize Select</Label>
    <WrapperSelect>
      <option value="" disabled selected>
        {placeholder}
      </option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </WrapperSelect>
  </Fragment>
);

Select.propTypes = {
  placeholder: PropTypes.string
};

const WrapperSelect = styled.select`
  display: block;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 2px;
  height: 3rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s;
  :focus {
    outline: none;
    border-bottom: 1px solid #2bbbad;
  }
`;
const Label = styled.label`
  margin-left: 0.6rem;
  font-size: 0.8rem;
  color: #9e9e9e;
  line-height: 1.6;
`;

export default Select;
