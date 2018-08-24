import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Link = ({ url, children, color = '#26a69a', ...props }) => (
  <Wrapper href={url} {...props} color={color}>
    {children}
  </Wrapper>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.any,
  color: PropTypes.string
};

const isLeft = props =>
  props.left &&
  css`
    :before {
      content: '';
      bottom: 0;
      right: 0;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #26a69a;
      transition: 0.2s;
    }
    :hover:before {
      width: 100%;
      left: 0;
    }
  `;

const isRight = props =>
  props.right &&
  css`
    :before {
      content: '';
      bottom: 0;
      right: 0;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #26a69a;
      transition: 0.2s;
    }
    :hover:before {
      width: 100%;
    }
  `;

const isCenter = props =>
  props.center &&
  css`
    :before {
      content: '';
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #26a69a;
      transition: 0.2s;
      transform: scaleX(0);
    }
    :hover:before {
      transform: scaleX(1);
    }
  `;

const Wrapper = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  color: ${({ color }) => color};
  ${isLeft};
  ${isRight};
  ${isCenter};
`;

export default Link;
