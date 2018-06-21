import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.min + this.props.max) / 2,
      coordX: 0
    };
  }
  coordX = e => {
    this.setState({
      coordX: e.pageX - 30,
      value: e.target.value
    });
  };
  render() {
    const { value, coordX } = this.state;
    return (
      <RangeField>
        <Input coordX={coordX} type="range" {...this.props} onMouseMove={this.coordX} defaultValue={this.state.value} />
        <SpanWrap>
          <SpanCount>{value}</SpanCount>
        </SpanWrap>
      </RangeField>
    );
  }
}
Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};
const showThumb = keyframes`
  from {
    transform-origin: bottom;
    transform: rotate(-45deg) scale(0.1)
  }
  to {
    transform: rotate(-45deg) scale(1)
  }
`;
const RangeField = styled.p`
  position: relative;
`;
const SpanWrap = styled.span`
  display: block;
`;
const SpanCount = styled.span`
  display: none;
`;
const Input = styled.input`
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  margin: 15px 0;
  padding: 0;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &:hover + span {
    display: block;
    position: absolute;
    top: -30px;
    left: ${props => props.coordX}px;
    border: none;
    background-color: #26a69a;
    transform-origin: 50% 50%;
    transform: rotate(-45deg);
    border-radius: 50% 50% 50% 0;
    animation: ${showThumb} 0.3s linear;
  }
  &:hover + span > span {
    display: block;
    width: 30px;
    text-align: center;
    color: #26a69a;
    transform: rotate(45deg);
    color: #fff;
    font-size: 10px;
    line-height: 30px;
  }
  &::-webkit-slider-runnable-track {
    height: 3px;
    background: #c2c0c2;
    border: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #26a69a;
    transition: -webkit-box-shadow 0.3s;
    transition: box-shadow 0.3s;
    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
    background-color: #26a69a;
    transform-origin: 50% 50%;
    margin: -5px 0 0 0;
  }
  &::-moz-range-track {
    height: 3px;
    background: #c2c0c2;
    border: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &::-moz-range-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #26a69a;
    transition: -webkit-box-shadow 0.3s;
    transition: box-shadow 0.3s;
    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
    margin-top: -5px;
  }
  &::-moz-focusring {
    outline: 1px solid #fff;
    outline-offset: -1px;
  }
  &::-ms-track {
    height: 3px;
    background: transparent;
    border-color: transparent;
    border-width: 6px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #777;
  }
  &::-ms-fill-upper {
    background: #ddd;
  }
  &::-ms-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #26a69a;
    transition: -webkit-box-shadow 0.3s;
    transition: box-shadow 0.3s;
    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
  }
`;

export default Range;
