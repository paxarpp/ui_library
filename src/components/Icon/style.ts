import styled, { css } from 'styled-components';
import { IWrapperProps } from './interface';

const isDisable = ({ disable }: IWrapperProps) =>
!disable &&
css`
  cursor: pointer;
  &:hover svg {
    fill: ${({ colorHover = 'currentColor' }: IWrapperProps) => colorHover};
  }
`;

export const Wrapper = styled.div<IWrapperProps>`
display: inline-block;
width: ${({ size = '24px' }) => size};
height: ${({ size = '24px' }) => size};
fill: ${({ color = 'currentColor' }) => color};
transition: all 0.3s ease;
${isDisable};
`;
