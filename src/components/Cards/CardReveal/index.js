import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../../Icon';

class CardReveal extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const { bgColor = 'white', textColor = 'grey', header, url, children } = this.props;
    const { open } = this.state;
    return (
      <Wrapper bgColor={bgColor} textColor={textColor}>
        <CardImage className="waves-effect waves-block waves-light">
          <Img onClick={() => this.setState({ open: !open })} activator src={url} />
        </CardImage>
        <CardContent>
          <CardTitle onClick={() => this.setState({ open: !open })} activator className="grey-text text-darken-4">
            {header} <Icon name="UnfoldMore" />
          </CardTitle>
          <P>
            <a href="#">This is a link</a>
          </P>
        </CardContent>
        <CardRev open={open}>
          <CardTitle className="grey-text text-darken-4">
            {header} <Icon name="Clear" onClick={() => this.setState({ open: !open })} />
          </CardTitle>
          <p>{children}</p>
        </CardRev>
      </Wrapper>
    );
  }
}
CardReveal.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};
const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;
const CardTitle = styled.span`
  font-size: 24px;
  font-weight: 300;
  cursor: ${props => props.activator && 'pointer'};
`;
const CardImage = styled.div`
  position: relative;
`;
const Img = styled.img`
  display: block;
  border-radius: 2px 2px 0 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  cursor: ${props => props.activator && 'pointer'};
`;
const CardContent = styled.div`
  padding: 24px;
  border-radius: 0 0 2px 2px;
  ${CardTitle} {
    display: block;
    line-height: 32px;
    margin-bottom: 8px;
  }
`;
const P = styled.p`
  margin: 0;
`;
const slidU = keyframes`
 to{
  transform: translateY(0);
 }
 from{
  transform: translateY(100%);
 }
`;
const slidD = keyframes`
 to{
  transform: translateY(100%);
 }
 from{
  transform: translateY(0);
 }
`;
const isActiv = props =>
  props.open === true
    ? css`
        opacity: 1;
        animation: ${slidU} 0.3s linear;
        transform: translateY(0);
      `
    : css`
        opacity: 1;
        animation: ${slidD} 0.3s linear;
        transform: translateY(100%);
      `;
const CardRev = styled.div`
  box-sizing: border-box;
  padding: 24px;
  position: absolute;
  background-color: inherit;
  left: 0;
  bottom: 0;
  height: 100%;
  transform: translateY(100%);
  z-index: 3;
  opacity: 0;
  ${CardTitle} {
    cursor: pointer;
    display: block;
  }
  ${isActiv};
`;
export default CardReveal;
