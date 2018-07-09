import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  render() {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <Wrapper active={active}>
        {children.map((el, indx) => (
          <Div key={`div${indx}`} active={active === indx} indx={indx}>
            {el}
          </Div>
        ))}
        {
          <Ul>
            {children.map((el, indx) => (
              <Li key={`li${indx}`} onClick={() => this.setState({ active: indx })} active={active === indx} />
            ))}
          </Ul>
        }
      </Wrapper>
    );
  }
}
CarouselSlider.propTypes = {
  children: PropTypes.object
};
const Wrapper = styled.div`
  height: 400px;
  top: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
const Ul = styled.ul`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  z-index: 999;
`;
const isActive = props =>
  props.active &&
  css`
    background-color: #fef;
    transform: scale(1.2);
  `;
const Li = styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 24px 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.3s linear;
  ${isActive};
`;
const isOpen = props =>
  props.active &&
  css`
    transform: translateX(0px);
    z-index: 1;
    opacity: 1;
    visibility: visible;
  `;
const isFirst = props =>
  props.indx === 0 &&
  css`
    z-index: -1;
    opacity: 1;
    visibility: visible;
    transform: translateX(-430px);
  `;
const isTwo = props =>
  props.indx === 1 &&
  css`
    transform: translateX(-860px));
    z-index: -2;
    opacity: 1;
    visibility: visible;
  `;
const isThree = props =>
  props.indx === 2 &&
  css`
    transform: translateX(-1290px);
    z-index: -1;
    opacity: 1;
    visibility: visible;
  `;
const isFour = props =>
  props.indx === 3 &&
  css`
    transform: translateX(-1720px);
    z-index: -1;
    opacity: 1;
    visibility: visible;
  `;
const Div = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  visibility: visible;
  transition: all 1s linear;
  ${isFirst};
  ${isTwo};
  ${isThree};
  ${isFour};
  ${isOpen};
`;
export default CarouselSlider;
