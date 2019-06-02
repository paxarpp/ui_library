import React from 'react';
import styled, { css } from '@reshadow/styled';
import PropTypes from 'prop-types';

const Li = ({ data, isOpen, click, popout }) => (
  <Wrapper onClick={click} popout={popout} isOpen={isOpen}>
    <CollapsibleHeader>{data.header}</CollapsibleHeader>
    <CollapsibleBody isOpen={isOpen} popout={popout}>
      <span>{data.content}</span>
    </CollapsibleBody>
  </Wrapper>
);
Li.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  popout: PropTypes.bool
};

const openStyle = css`
  height: 100%;
  padding: 2rem;
`;
const popoutStyle = css`
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 0 24px;
`;
const popoutStyleActiv = css`
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 16px 0;
`;
const Wrapper = styled.li`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${props => !props.isOpen && props.popout && popoutStyle};
  ${props => props.isOpen && props.popout && popoutStyleActiv};
`;
const CollapsibleHeader = styled.div`
  display: flex;
  cursor: pointer;
  line-height: 1.5;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  :focus {
    outline: 0;
    background-color: #eee;
  }
`;
const openStylePopoup = css`
  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.3s linear, height 0.3s linear;
  height: 100%;
  padding: 2rem;
`;
const CollapsibleBody = styled.div`
  height: 0;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  padding: 0 2rem;
  overflow: hidden;
  transition: padding 0.3s linear, height 0.3s linear;
  ${props => props.isOpen && !props.popout && openStyle};
  ${props => props.isOpen && props.popout && openStylePopoup};
`;

export default Li;
