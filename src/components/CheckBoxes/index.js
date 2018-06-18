import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <p>
        <Label>
          <Input type="checkbox" {...props} onClick={() => this.setState({ checked: !this.state.checked })} />
          <Span {...props} checked={this.state.checked}>
            {children}
          </Span>
        </Label>
      </p>
    );
  }
}
CheckBoxes.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool
};

const Label = styled.label`
  font-size: 0.8rem;
  color: #9e9e9e;
  box-sizing: border-box;
`;
const beforeSpan1 = `
  :before {
    border: none;
    background-color: rgba(0, 0, 0, 0.42);
  }
`;
const beforeSpan2 = `
  :before {
    top: -4px;
    left: -5px;
    width: 12px;
    height: 22px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #26a69a;
    border-bottom: 2px solid #26a69a;
    transform: rotate(40deg);
    backface-visibility: hidden;
    transform-origin: 100% 100%;
  }
`;
const beforeSpan3 = `
  :before {
    border-right: 2px solid rgba(0, 0, 0, 0.42);
    border-bottom: 2px solid rgba(0, 0, 0, 0.42);
  }
`;
const spanAfter = `
  :after {
    border-radius: 2px;
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s, top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }
`;
const spanBefore = `
  :before {
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s, top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }
`;
const spanBeforeNotCheck = `
  :before {
    width: 0;
    height: 0;
    border: 3px solid transparent;
    left: 6px;
    top: 10px;
    transform: rotateZ(37deg);
    transform-origin: 100% 100%;
  }
`;
const spanAfterNotCheck = `
  :after {
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid #5a5a5a;
    top: 0px;
    z-index: 0;
  }
`;
const spanBeforeCheck = `
  :before {
    top: 0;
    left: 1px;
    width: 8px;
    height: 13px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(37deg);
    transform-origin: 100% 100%;
  }
`;
const spanAfterCheck = `
  :after {
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #26a69a;
    background-color: #26a69a;
    z-index: 0;
  }
`;
const spanBeforeDisableNotCheck = `
  :before {
    background-color: transparent;
    border: 2px solid transparent;
  }
`;
const spanAfterDisableNotCheck = `
  :after {
    border-color: transparent;
    background-color: #949494;
  }
`;
const spanBeforeDisableCheck = `
  :before {
    background-color: transparent;
  }
`;
const spanAfterDisableCheck = `
  :after {
    background-color: #949494;
    border-color: #949494;
  }
`;
const Span = styled.span`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    z-index: 0;
    border: 2px solid #5a5a5a;
    border-radius: 1px;
    margin-top: 3px;
    transition: 0.2s;
  }
  :checked:before {
    top: -4px;
    left: -5px;
    width: 12px;
    height: 22px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #26a69a;
    border-bottom: 2px solid #26a69a;
    transform: rotate(40deg);
    backface-visibility: hidden;
    transform-origin: 100% 100%;
  }
  ${props => props.disabled && !props.checked && beforeSpan1};
  ${props => props.checked && beforeSpan2};
  ${props => props.checked && props.disabled && beforeSpan3};
  ${props => props.filled && spanAfter};
  ${props => props.filled && spanBefore};
  ${props => props.filled && !props.checked && spanBeforeNotCheck};
  ${props => props.filled && !props.checked && spanAfterNotCheck};
  ${props => props.filled && props.checked && spanBeforeCheck};
  ${props => props.filled && props.checked && spanAfterCheck};
  ${props => props.filled && props.disabled && !props.checked && spanBeforeDisableNotCheck};
  ${props => props.filled && props.disabled && !props.checked && spanAfterDisableNotCheck};
  ${props => props.filled && props.disabled && props.checked && spanBeforeDisableCheck};
  ${props => props.filled && props.disabled && props.checked && spanAfterDisableCheck};
`;
const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
export default CheckBoxes;
