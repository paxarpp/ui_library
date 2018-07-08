import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Page1 = () => (
  <div style={{ background: 'red', height: '100%' }}>
    <h2>Header page1</h2>
    <p>Это ваша первая панель</p>
  </div>
);
const Page2 = () => (
  <div style={{ background: 'blue', height: '100%' }}>
    <h2>Header page2</h2>
    <p>Это ваша вторая панель</p>
  </div>
);
const Page3 = () => (
  <div style={{ background: 'green', height: '100%' }}>
    <h2>Header page3</h2>
    <p>Это ваша третья панель</p>
  </div>
);
const Page4 = () => (
  <div style={{ background: 'brown', height: '100%' }}>
    <h2>Header page4</h2>
    <p>Это ваша четвертая панель</p>
  </div>
);

class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  handler = indx => () => {
    this.setState({
      active: indx
    });
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        <Wrapper handler={this.handler} active={active}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Wrapper>
      </div>
    );
  }
}
CarouselSlider.propTypes = {
  width: PropTypes.string
};
const Wrapper = styled(({ className, children, handler, active }) => (
  <div className={className}>
    {children.map((el, indx) => (
      <Div key={`div${indx}`} active={active === indx} indx={indx}>
        {el}
      </Div>
    ))}
    {
      <Ul>
        {[...Array(children.length)]
          .fill(0)
          .map((el, indx) => <Li key={`li${indx}`} onClick={handler(indx)} active={active === indx} />)}
      </Ul>
    }
  </div>
))`
  height: 400px;
  top: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  width: 100%;
  perspective: 500px;
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
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
