import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SVGInline from 'react-svg-inline';

import * as Icons from '../../../components/assets';

export default class SVGButton extends PureComponent {
  render() {
    const { name, className, handlerClick, children } = this.props;
    const Icon = Icons[name] ? Icons[name] : Icons['button'];
    return (
      <Wrapper onClick={handlerClick} {...this.props} className={className}>
        {<SVGInline svg={Icon} />}
        <Div {...this.props}>{children}</Div>
      </Wrapper>
    );
  }
}

SVGButton.propTypes = {
  /** title button*/
  children: PropTypes.any,
  /** name of the button type */
  name: PropTypes.string,
  /** function handler click*/
  handlerClick: PropTypes.func,
  /** user color button */
  color: PropTypes.string,
  /** user color button :hover */
  colorHover: PropTypes.string,
  /** size button */
  small: PropTypes.bool,
  /** size button */
  large: PropTypes.bool,
  /** for best compatibility Wrapper SC */
  className: PropTypes.string
};

SVGButton.defaultProps = {
  name: 'button',
  color: 'currentColor',
  colorHover: '#2bbbad'
};

const isSmall = props =>
  props.small &&
  css`
    width: 80px;
    height: 40px;
  `;

const isLarge = props =>
  props.large &&
  css`
    width: 120px;
    height: 60px;
  `;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 50px;
  ${isSmall};
  ${isLarge};
  > span svg {
    width: 100px;
    height: 50px;
    ${isSmall};
    ${isLarge};
  }
  > span svg rect {
    transition: 1s;
    stroke: ${({ color }) => color};
    stroke-dasharray: 500, 500;
    stroke-dashoffset: 0;
  }
  :hover span svg rect {
    cursor: pointer;
    stroke-dasharray: ${({ small }) => (small ? '80, 400' : '100, 400')};
    stroke-dashoffset: ${({ small, large }) => (small ? 360 : large ? 310 : 350)};
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
  ${isSmall};
  ${isLarge};
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
