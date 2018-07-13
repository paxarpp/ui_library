import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

import * as Icons from './assets';

export default class SVGButton extends PureComponent {
  render() {
    const { name, className, handlerClick, children } = this.props;
    const Icon = Icons[name] ? Icons[name] : Icons['button'];
    return (
      <Wrapper onClick={handlerClick} {...this.props} className={className}>
        <SVGInline svg={Icon} />
        <Div {...this.props}>{children}</Div>
      </Wrapper>
    );
  }
}
SVGButton.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  handlerClick: PropTypes.func,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  /** for best compatibility Wrapper SC */
  className: PropTypes.string
};
SVGButton.defaultProps = {
  name: 'button',
  color: 'currentColor',
  colorHover: '#2bbbad'
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 50px;
  > span svg {
    width: 100px;
    height: 50px;
  }
  > span svg rect {
    transition: 1s;
    stroke: ${({ color }) => color};
    stroke-dasharray: 500, 500;
    stroke-dashoffset: 0;
  }
  :hover span svg rect {
    cursor: pointer;
    stroke-dasharray: 100, 400;
    stroke-dashoffset: 350;
    stroke: ${({ colorHover }) => colorHover};
  }
`;
const Div = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 1s;
  cursor: pointer;
  :hover {
    color: ${({ colorHover }) => colorHover};
  }
`;
