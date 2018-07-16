import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
      dis: '',
      select: ''
    };
  }
  handler = (option, indx) => event => {
    if (this.props.stop) {
      event.stopPropagation();
    }
    this.setState({
      value: option.val,
      dis: option.dis,
      select: indx
    });
  };
  render() {
    const { placeholder, data } = this.props;
    const { open, select, dis } = this.state;
    return (
      <Wrapper onClick={() => this.setState({ open: !open })}>
        <Input>
          {select !== '' ? dis : placeholder}
          <WrapIcon name="expandMore" size="16px" open={open} />
        </Input>
        <SelectOptions open={open}>
          <Ul>
            {data.map((option, indx) => (
              <Li key={indx} selected={select === indx} onClick={this.handler(option, indx)}>
                <SpanL>{option.val}</SpanL>
                <SpanR>{option.dis}</SpanR>
              </Li>
            ))}
          </Ul>
        </SelectOptions>
      </Wrapper>
    );
  }
}
Select.propTypes = {
  placeholder: PropTypes.string,
  stop: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      val: PropTypes.any,
      dis: PropTypes.string
    })
  )
};
const Input = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 8px 6px;
  color: #999;
  font-weight: 300;
  font-size: 1rem;
  position: relative;
  :hover {
    border-bottom: 1px solid #2bbbad;
  }
  :hover > div {
    color: #2bbbad;
  }
`;
const WrapIcon = styled(Icon)`
  position: absolute;
  left: calc(100% - 20px);
  top: 30%;
  ${({ open }) => open && 'transform: rotate(180deg)'};
`;
const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
`;
const isOpen = props =>
  props.open &&
  css`
    transform: scaleY(1);
  `;
const SelectOptions = styled.div`
  box-sizing: border-box;
  border: 1px solid #2bbbad;
  position: absolute;
  width: 100%;
  border-radius: 3px;
  z-index: 100;
  top: 36px;
  left: 0;
  transform: scaleY(0);
  transform-origin: top;
  overflow: hidden;
  transition: all 0.2s linear;
  ${isOpen};
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const isSelected = props =>
  props.selected &&
  css`
    > span:first-child {
      color: #2bbbad;
    }
    :after {
      content: '';
      width: 5px;
      height: 10px;
      border: 1px solid #2bbbad;
      border-right: 0;
      border-bottom: 0;
      left: calc(100% - 20px);
      top: 50%;
      transform: translateY(-50%) rotate(-135deg);
      position: absolute;
    }
  `;
const Li = styled.li`
  padding: 8px 50px 8px 6px;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
  background-color: #fff;
  color: #999;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  :hover {
    background-color: #f2f2f2;
  }
  :last-child {
    border-bottom: 0;
  }
  ${isSelected};
`;
const SpanL = styled.span`
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: -6px;
    bottom: -7px;
    right: -0.5rem;
    border-right: 1px solid #ddd;
  }
`;
const SpanR = styled.span`
  margin-left: 1rem;
`;
export default Select;
