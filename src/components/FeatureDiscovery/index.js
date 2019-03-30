import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { toggleOpen } from '../helpers';
import { Float } from '../Button';
import { Icon } from '../Icon';

const FeatureDiscovery = ({ header, children, open }) => {
  const [check, toggler] = useState(open);
  return (
    <TapTargetWrapper open={check}>
      <TapTarget>
        <TapTargetContent>
          <H5>{header}</H5>
          <p>{children}</p>
        </TapTargetContent>
      </TapTarget>
      <TapTargetWave open={check}>
        <WrapFloat large color="cyan" handlerClick={toggleOpen(toggler, check)}>
          <Icon name="menu" />
        </WrapFloat>
      </TapTargetWave>
    </TapTargetWrapper>
  );
};

FeatureDiscovery.propTypes = {
  open: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.any
};
const WrapFloat = styled(Float)`
  visibility: visible;
  bottom: 45px;
  right: 40px;
  position: fixed;
  margin-bottom: 0;
  z-index: 997;
`;
const isOpen = props =>
  props.open &&
  css`
    visibility: visible;
  `;
const TapTargetWrapper = styled.div`
  width: 800px;
  height: 800px;
  position: fixed;
  right: -331px;
  bottom: -327px;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0s 0.3s;
  ${isOpen};
`;
const TapTarget = styled.div`
  transform: scale(1);
  opacity: 0.95;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  position: absolute;
  font-size: 1rem;
  border-radius: 50%;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  background-color: #00bcd4 !important;
`;
const TapTargetContent = styled.div`
  width: 456px;
  height: 400px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding: 56px;
  vertical-align: bottom;
  position: relative;
  display: table-cell;
  color: #fff !important;
  box-sizing: border-box;
`;
const H5 = styled.h5`
  font-size: 1.64rem;
  line-height: 110%;
  margin: 1.0933333333rem 0 0.656rem 0;
`;
const pulseAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
`;
const isOpenWave = props =>
  props.open &&
  css`
    visibility: visible;
    animation: ${pulseAnimation} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    transition: opacity 0.3s, transform 0.3s, visibility 0s 1s;
  `;
const TapTargetWave = styled.div`
  top: 344px;
  left: 344px;
  width: 112px;
  height: 112px;
  position: absolute;
  border-radius: 50%;
  z-index: 10001;
  :before,
  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffffff;
  }
  :before {
    transform: scale(1);
    transition: transform 0.3s;
  }
  :after {
    visibility: hidden;
    transition: opacity 0.3s, transform 0.3s, visibility 0s;
    z-index: -1;
    ${isOpenWave};
  }
`;
export default FeatureDiscovery;
