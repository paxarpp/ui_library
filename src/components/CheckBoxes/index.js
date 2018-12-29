import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  handler = () => this.setState({ checked: !this.state.checked });

  render() {
    const { children, ...props } = this.props;
    return (
      <p>
        <Label>
          <Input type="checkbox" {...props} onChange={this.handler} />
          <Span {...props} checked={this.state.checked}>
            {children}
          </Span>
        </Label>
      </p>
    );
  }
}
CheckBoxes.propTypes = {
  /** label checkbox*/
  children: PropTypes.string,
  /** checked */
  checked: PropTypes.bool
};

const Label = styled.label`
  font-size: 0.8rem;
  color: #9e9e9e;
  box-sizing: border-box;
`;
const beforeSpan1 = css`
  :before {
    border: none;
    background-color: rgba(0, 0, 0, 0.42);
  }
`;
const beforeSpan2 = css`
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
const beforeSpan3 = css`
  :before {
    border-right: 2px solid rgba(0, 0, 0, 0.42);
    border-bottom: 2px solid rgba(0, 0, 0, 0.42);
  }
`;
const spanAftBef = css`
  :after {
    border-radius: 2px;
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s, top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }
  :before {
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s, top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }
`;
const spanAftBefNotCheck = css`
  :before {
    width: 0;
    height: 0;
    border: 3px solid transparent;
    left: 6px;
    top: 10px;
    transform: rotateZ(37deg);
    transform-origin: 100% 100%;
  }
  :after {
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid #5a5a5a;
    top: 0px;
    z-index: 0;
  }
`;
const spanAftBefCheck = css`
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
  :after {
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #26a69a;
    background-color: #26a69a;
    z-index: 0;
  }
`;
const spanAftBefDisableNotCheck = css`
  :before {
    background-color: transparent;
    border: 2px solid transparent;
  }
  :after {
    border-color: transparent;
    background-color: #949494;
  }
`;
const spanAftBefDisableCheck = css`
  :before {
    background-color: transparent;
  }
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
  ${props => props.filled && spanAftBef};
  ${props => props.filled && !props.checked && spanAftBefNotCheck};
  ${props => props.filled && props.checked && spanAftBefCheck};
  ${props => props.filled && props.disabled && !props.checked && spanAftBefDisableNotCheck};
  ${props => props.filled && props.disabled && props.checked && spanAftBefDisableCheck};
`;
const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
export default CheckBoxes;
