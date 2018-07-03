import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Float } from '../Button';

class FloatingAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const { children, name, color, ...props } = this.props;
    const { open } = this.state;
    return (
      <Wrapper {...props}>
        <MainFloat large color={color} {...props} handlerClick={() => this.setState({ open: !open })}>
          <Icon name={name} />
        </MainFloat>
        <Wrap {...props}>
          <WrapAction {...props} open={open}>
            {children.map((el, indx) => (
              <WrapFloat key={indx} color={el.props.clr} small handlerClick={el.props.act}>
                {el}
              </WrapFloat>
            ))}
          </WrapAction>
        </Wrap>
      </Wrapper>
    );
  }
}
FloatingAction.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  color: PropTypes.string
};
const isFixed = props =>
  props.fixed &&
  css`
    position: fixed;
    right: 30px;
    left: 30px;
    bottom: 23px;
    margin-left: 0;
    padding-top: 15px;
    margin-bottom: 0;
    text-align: end;
  `;
const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2px 0;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  margin-left: 5px;
  ${isFixed};
  z-index: 997;
`;
const wrapIsFixed = props =>
  props.fixed &&
  css`
    flex-flow: row-reverse;
    top: 30px;
    right: 0;
    padding-right: 60px;
  `;
const openNotFix = props =>
  props.fixed
    ? css`
        transform: translateX(0);
      `
    : css`
        transform: translateX(50px);
      `;
const openFix = props =>
  props.fixed
    ? css`
        transform: translateX(100%);
      `
    : css`
        transform: translateX(-100%);
      `;
const WrapAction = styled.div`
  position: absolute;
  display: flex;
  top: 15px;
  left: 0;
  ${props => (props.open ? openNotFix : openFix)};
  transition: transform 0.2s linear;
  ${wrapIsFixed};
`;
const WrapFloat = styled(Float)`
  margin: 0 0 0 15px;
`;
const MainFloat = styled(Float)`
  left: ${props => (props.fixed ? '10px' : '-10px')};
  z-index: 9;
`;

export default FloatingAction;
