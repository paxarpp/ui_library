import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Link = ({ url, children, color = '#26a69a', ...props }) => (
  <Wrapper href={url} {...props} color={color}>
    {children}
  </Wrapper>
);

Link.propTypes = {
  /** url for Link */
  url: PropTypes.string.isRequired,
  /** what see in Link */
  children: PropTypes.any,
  /** color text , line and any output in Link */
  color: PropTypes.string,
  /** the start point of the underscore animation */
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  /** lowercase if exist, or default uppercase */
  lowercase: PropTypes.bool
};

const style = css`
  content: '';
  bottom: 0;
  position: absolute;
  height: 2px;
  background-color: ${({ color }) => color};
  transition: 0.2s;
`;

const isLeft = props =>
  props.left &&
  css`
    :before {
      ${style};
      left: 0;
      width: 0%;
    }
    :hover:before {
      width: 100%;
    }
  `;

const isRight = props =>
  props.right &&
  css`
    :before {
      ${style};
      right: 0;
      width: 0%;
    }
    :hover:before {
      width: 100%;
    }
  `;

const isCenter = props =>
  props.center &&
  css`
    :before {
      ${style};
      left: 0;
      width: 100%;
      transform: scaleX(0);
    }
    :hover:before {
      transform: scaleX(1);
    }
  `;

const isDefault = props =>
  !props.center &&
  !props.right &&
  !props.left &&
  css`
    :before {
      ${style};
      left: 0;
      width: 100%;
    }
  `;

const Wrapper = styled.a`
  text-transform: ${({ lowercase }) => (lowercase ? 'lowercase' : 'uppercase')};
  text-decoration: none;
  position: relative;
  color: ${({ color }) => color};
  ${isDefault};
  ${isLeft};
  ${isRight};
  ${isCenter};
`;

export default Link;
