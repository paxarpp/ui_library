import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = ({ children, width = '100px', active = true, onClick }) => (
  <Ul width={width} active={active} onClick={onClick}>
    {children.map((el, indx) => (
      <Li skip={el.type.name === 'Divider'} key={indx}>
        {el}
      </Li>
    ))}
  </Ul>
);
Dropdown.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.array.isRequired,
  width: PropTypes.string,
  active: PropTypes.bool
};
const isActive = props =>
  props.active === false &&
  css`
    opacity: 0.8;
    transform: scaleX(0.5) scaleY(0);
    box-shadow: none;
  `;
const Ul = styled.ul`
  display: block;
  transform-origin: 0px 0px 0px;
  padding-left: 0;
  width: ${({ width }) => width};
  opacity: 1;
  transform: scaleX(1) scaleY(1);
  list-style: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s linear;
  ${isActive};
`;
const isSkip = props =>
  props.skip &&
  css`
    cursor: default;
    min-height: 2px;
    line-height: 0.1rem;
    padding: 0;
  `;
const Li = styled.li`
  clear: both;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  min-height: 20px;
  line-height: 1.5rem;
  width: 100%;
  font-size: 1.2rem;
  color: #26a69a;
  padding: 14px 16px;
  box-sizing: border-box;
  :hover {
    background-color: #eee;
  }
  ${isSkip};
`;
export default Dropdown;
