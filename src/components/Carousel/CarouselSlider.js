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
    const { children, width } = this.props;
    const { active } = this.state;
    return (
      <Main width={width}>
        <Wrapper active={active} width={width}>
          {children.map((el, indx) => (
            <Div key={`div${indx}`} active={active} width={width}>
              {el}
            </Div>
          ))}
        </Wrapper>
        {
          <Ul>
            {children.map((el, indx) => (
              <Li key={`li${indx}`} onClick={() => this.setState({ active: indx })} active={active === indx} />
            ))}
          </Ul>
        }
      </Main>
    );
  }
}
CarouselSlider.propTypes = {
  children: PropTypes.array,
  width: PropTypes.number
};
CarouselSlider.defaultProps = {
  width: 600
};
const Main = styled.div`
  height: 400px;
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width}px;
`;
const isFirst = props =>
  props.active === 0 &&
  css`
    transform: translateX(0);
  `;
const isTwo = props =>
  props.active === 1 &&
  css`
    transform: translateX(-${({ width }) => width}px);
  `;
const isThree = props =>
  props.active === 2 &&
  css`
    transform: translateX(-${({ width }) => 2 * width}px);
  `;
const isFour = props =>
  props.active === 3 &&
  css`
    transform: translateX(-${({ width }) => 3 * width}px);
  `;
const Wrapper = styled.div`
  height: 400px;
  width: ${({ width }) => 4 * width}px;
  display: flex;
  flex-flow: row nowrap;
  transition: all 1s cubic-bezier(0.4, 1.21, 1, 0.99);
  ${isFirst};
  ${isTwo};
  ${isThree};
  ${isFour};
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
    background-color: #fee;
    transform: scale(1.2);
  `;
const Li = styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 24px 4px;
  background-color: rgba(255, 255, 0, 0.5);
  border-radius: 50%;
  transition: all 0.3s linear;
  ${isActive};
`;

const Div = styled.div`
  height: 100%;
  width: ${({ width }) => width}px;
`;
export default CarouselSlider;
