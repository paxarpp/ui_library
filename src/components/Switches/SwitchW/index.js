import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SwitchW = ({ disabled, click }) => (
  <Wrapper>
    <Label disabled={disabled}>
      Off
      <Input type="checkbox" onChange={() => click} disabled={disabled} />
      <Span disabled={disabled} />
      On
    </Label>
  </Wrapper>
);
SwitchW.propTypes = {
  click: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};
const Wrapper = styled.div`
  user-select: none;
  & * {
    user-select: none;
  }
`;
const Label = styled.label`
  cursor: ${props => !props.disabled && 'pointer'};
  font-size: 0.8rem;
  color: #9e9e9e;
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #84c7c1;
  }
  &:checked + span:before,
  &:checked + span:after {
    left: 18px;
  }
  &:checked + span:after {
    background-color: #26a69a;
  }
  &:checked:not(:disabled) ~ span:active:before,
  &:checked:not(:disabled).tabbed:focus ~ span:before {
    transform: scale(2.4);
    background-color: rgba(38, 166, 154, 0.15);
  }
  &:not(:disabled) ~ span:active:before,
  &:not(:disabled).tabbed:focus ~ span:before {
    transform: scale(2.4);
    background-color: rgba(0, 0, 0, 0.08);
  }
  &:disabled + span:after,
  &:disabled:checked + span:after {
    background-color: #949494;
  }
`;
const beforeAfter = css`
  content: '';
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease, transform 0.1s ease;
`;
const Span = styled.span`
  content: '';
  display: inline-block;
  position: relative;
  width: 36px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.38);
  border-radius: 15px;
  margin-right: 10px;
  transition: background 0.3s ease;
  vertical-align: middle;
  margin: 0 16px;
  cursor: ${props => !props.disabled && 'pointer'};
  background-color: rgba(0, 0, 0, 0.12);
  &:before {
    ${beforeAfter};
    background-color: rgba(38, 166, 154, 0.15);
  }
  &:after {
    ${beforeAfter};
    background-color: #f1f1f1;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
export default SwitchW;
