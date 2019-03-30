import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SVGInline from 'react-svg-inline';

import * as Icons from '../../components/assets';

export default class Icon extends PureComponent {
  render() {
    const { name, className } = this.props;
    const Icon = Icons[name] ? Icons[name] : Icons['default'];
    return (
      <Wrapper {...this.props} className={className}>
        {<SVGInline svg={Icon} />}
      </Wrapper>
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  colorHover: PropTypes.string,
  style: PropTypes.object,
  /** for best compatibility Wrapper SC */
  className: PropTypes.string,
  disable: PropTypes.bool
};
Icon.defaultProps = {
  color: 'currentColor',
  colorHover: 'currentColor',
  size: '24px'
};
const isDisable = props =>
  !props.disable &&
  css`
    cursor: pointer;
    &:hover svg {
      fill: ${({ colorHover }) => colorHover};
    }
  `;
const Wrapper = styled.div`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  fill: ${({ color }) => color};
  transition: all 0.3s ease;
  ${isDisable};
`;
