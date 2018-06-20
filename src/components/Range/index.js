import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.min + this.props.max) / 2,
      coordX: 0
    };
  }
  inputField = e => {
    this.setState({
      value: e.target.value
    });
  };
  coordX = e => {
    this.setState({
      coordX: e.pageX - 30
    });
  };
  render() {
    const { value, coordX } = this.state;
    return (
      <RangeField>
        <Input
          coordX={coordX}
          type="range"
          {...this.props}
          onMouseMove={this.coordX}
          onChange={this.inputField}
          defaultValue={this.state.value}
        />
        <Thumb>
          <span>{value}</span>
        </Thumb>
      </RangeField>
    );
  }
}
Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};
const RangeField = styled.p`
  position: relative;
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
  :focus {
    outline: none;
  }
  :hover + span {
    display: block;
    position: absolute;
    top: -20px;
    left: ${props => props.coordX}px;
    border: none;
    background-color: #26a69a;
    margin-left: 7px;
    transform-origin: 50% 50%;
    transform: rotate(-45deg);
    border-radius: 50% 50% 50% 0;
  }
  :hover + span > span {
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
const Thumb = styled.span`
  cursor: pointer;
`;

export default Range;
