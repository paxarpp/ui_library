import styled, { css } from 'styled-components';
import { PositionProps, IWrapperProps } from './interface';

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

export const Wrapper = styled.a<IWrapperProps>`
text-transform: ${({ lowercase }) => (lowercase ? 'lowercase' : 'uppercase')};
text-decoration: none;
position: relative;
color: ${({ color }) => color};
${isDefault};
${isLeft};
${isRight};
${isCenter};
`;
