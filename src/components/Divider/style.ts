import styled, { css } from 'styled-components';
import { IWrap } from './interface';

const style = css`
  content: '';
  background-color: #e0e0e0;
  height: 1px;
  flex: 1;
`;

export const Wrap = styled.h4<IWrap>`
  display: flex;
  margin: 0 auto;
  width: ${({ max }) => (max ? '100%' : '80%')};
  align-items: center;
  :after {
    ${style};
    flex: ${({ start }) => start && '20'};
  }
  :before {
    ${style};
    flex: ${({ end }) => end && '20'};
  }
`;
