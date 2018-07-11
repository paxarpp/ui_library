import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      clientRect: 0,
      delta: 0
    };
  }
  selectTab = event => {
    this.setState({
      active: event.currentTarget.value,
      clientRect: event.currentTarget.getBoundingClientRect(),
      delta: event.currentTarget.offsetLeft
    });
  };
  render() {
    const { active, clientRect, delta } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div>
          <Ul>
            {data.map((el, indx) => (
              <Tab key={el.tab} value={indx} onClick={this.selectTab}>
                <Link active={active === indx}>{el.tab}</Link>
              </Tab>
            ))}
            <Indicator start={clientRect.left - delta} end={clientRect.right - delta} width={clientRect.width} />
          </Ul>
        </div>
        {data.map((el, indx) => (
          <Content active={active === indx} key={indx}>
            {el.content}
          </Content>
        ))}
      </div>
    );
  }
}
Tabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tab: PropTypes.string.isRequired,
      content: PropTypes.string
    })
  )
};
const Ul = styled.ul`
  padding-left: 0;
  list-style-type: none;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  height: 48px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  white-space: nowrap;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: inherit;
`;
const Tab = styled.li`
  display: inline-block;
  text-align: center;
  line-height: 48px;
  height: 48px;
  text-transform: uppercase;
`;
const isActive = props =>
  props.active &&
  css`
    background-color: rgba(246, 178, 181, 0.2);
    color: #ee6e73;
  `;
const Link = styled.p`
  color: rgba(238, 110, 115, 0.7);
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 24px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: color 0.28s ease, background-color 0.28s ease;
  text-decoration: none;
  ${isActive};
  :hover {
    color: #ee6e73;
    cursor: pointer;
  }
`;
const Indicator = styled.li`
  position: absolute;
  bottom: 0;
  height: 2px;
  left: ${({ start }) => start}px;
  width: ${({ width }) => width}px;
  background-color: #f6b2b5;
`;
const isActivContent = props =>
  props.active &&
  css`
    display: block;
  `;
const Content = styled.div`
  display: none;
  padding: 20px;
  ${isActivContent};
`;
export default Tabs;
