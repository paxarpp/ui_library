import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Preloader2 = ({ color = '#26a69a', size = '50px' }) => (
  <Wrapper size={size}>
    <SpinnerLayer color={color}>
      <Left>
        <CircleL />
      </Left>
      <GapPatch>
        <Circle />
      </GapPatch>
      <Right>
        <CircleR />
      </Right>
    </SpinnerLayer>
  </Wrapper>
);
Preloader2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};
const left_spin = keyframes`
  from { transform: rotate(130deg); }
  50% { transform: rotate(-5deg); }
  to { transform: rotate(130deg); }
`;
const right_spin = keyframes`
  from { transform: rotate(-130deg); }
  50% { transform: rotate(5deg);}
  to { transform: rotate(-130deg); }
`;
const fill_unfill_rotate = keyframes`
  12.5% { transform: rotate(135deg); }
  25% { transform: rotate(270deg); }
  37.5% { transform: rotate(405deg); }
  50% { transform: rotate(540deg); }
  62.5% { transform: rotate(675deg); }
  75% { transform: rotate(810deg); }
  87.5% { transform: rotate(945deg); }
  to { transform: rotate(1080deg); }
`;
const rotateWrap = keyframes`
  to { transform: rotate(360deg); }
`;
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${rotateWrap} 1333ms linear infinite;
  box-sizing: border-box;
`;
const SpinnerLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-color: ${props => props.color};
  opacity: 1;
  animation: ${fill_unfill_rotate} 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  box-sizing: inherit;
`;
const GapPatch = styled.div`
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
  box-sizing: inherit;
`;
const Circle = styled.div`
  width: 1000%;
  left: -450%;
  border-radius: 50%;
  box-sizing: inherit;
`;
const circle_clipper = `
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
  box-sizing: inherit;
`;
const Left = styled.div`
  ${circle_clipper};
  float: left !important;
`;
const Right = styled.div`
  ${circle_clipper};
  float: right !important;
`;
const styleCircle = `
  width: 200%;
  height: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent !important;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: inherit;
`;
const CircleL = styled.div`
  ${styleCircle};
  left: 0;
  border-right-color: transparent !important;
  transform: rotate(129deg);
  animation: ${left_spin} 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
`;
const CircleR = styled.div`
  ${styleCircle};
  left: -100%;
  border-left-color: transparent !important;
  transform: rotate(-129deg);
  animation: ${right_spin} 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
`;
export default Preloader2;
