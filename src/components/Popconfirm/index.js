import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Primary } from '../Button';

const Popconfirm = ({ title, open, onClick }) => (
  <Wrap open={open}>
    <Arrow />
    <Inner>
      <Message>
        <Title>{title}</Title>
      </Message>
      <Buttons>
        <WrapPrimary border small handlerClick={onClick}>
          NO
        </WrapPrimary>
        <Primary small bottom handlerClick={onClick}>
          YES
        </Primary>
      </Buttons>
    </Inner>
  </Wrap>
);

Popconfirm.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func
};
const isOpen = props =>
  !props.open &&
  css`
    display: none;
  `;
const Wrap = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  z-index: 1030;
  cursor: auto;
  user-select: text;
  white-space: normal;
  font-weight: 400;
  text-align: left;
  ${isOpen};
`;
const Arrow = styled.div`
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  bottom: -6px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  background: #fff;
  width: 8px;
  height: 8px;
  position: absolute;
  border-color: transparent;
  border-style: solid;
`;
const Inner = styled.div`
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.65);
`;
const Message = styled.div`
  padding: 4px 0 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`;
const Title = styled.div`
  padding-left: 22px;
`;
const Buttons = styled.div`
  text-align: right;
  margin-bottom: 4px;
`;
const WrapPrimary = styled(Primary)`
  margin-right: 6px;
`;
export default Popconfirm;
