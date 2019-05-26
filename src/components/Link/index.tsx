import React from 'react';
import styled, { css } from 'styled-components';

interface PositionProps {
  readonly center?: boolean;
  readonly right?: boolean;
  readonly left?: boolean;
}

interface IProps extends IWrapperProps {
  /** url for Link */
  readonly url: string;
};
interface IWrapperProps {
  /** what see in Link */
  readonly children?: any;
  /** color text , line and any output in Link */
  readonly color?: string;
  /** the start point of the underscore animation */
  readonly left?: boolean;
  readonly right?: boolean;
  readonly center?: boolean;
  /** lowercase if exist, or default uppercase */
  readonly lowercase?: boolean;
};

const Link = ({ url, children, color = '#26a69a', ...props }: IProps) => (
  <Wrapper href={url} {...props} color={color}>
    {children}
  </Wrapper>
);


const style = css<{ color: string }>`
  content: '';
  bottom: 0;
  position: absolute;
  height: 2px;
  background-color: ${({ color }) => color};
  transition: 0.2s;
`;

const isLeft = ({ left }: PositionProps) =>
  left &&
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

const isRight = ({ right }: PositionProps) =>
  right &&
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

const isCenter = ({ center }: PositionProps) =>
  center &&
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

const isDefault = ({ center, right, left }: PositionProps) =>
  !center &&
  !right &&
  !left &&
  css`
    :before {
      ${style};
      left: 0;
      width: 100%;
    }
  `;

const Wrapper = styled.a<IWrapperProps>`
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
