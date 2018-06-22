import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = ({ data, isOpen, click }) => (
  <li onClick={click}>
    <CollapsibleHeader>{data.header}</CollapsibleHeader>
    <CollapsibleBody isOpen={isOpen}>
      <span>{data.content}</span>
    </CollapsibleBody>
  </li>
);
Li.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
};

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: -1,
      numberClick: -1
    };
  }
  render() {
    const { data, ...props } = this.props;
    const { numberClick, isOpen } = this.state;
    return (
      <WrapperCollapsible>
        {data.map((elem, indx) => (
          <Li
            key={indx}
            data={elem}
            isOpen={numberClick === indx ? (isOpen === indx ? true : false) : false}
            click={() => this.setState({ numberClick: indx, isOpen: this.state.isOpen === indx ? -1 : indx })}
          />
        ))}
      </WrapperCollapsible>
    );
  }
}
Collapsible.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string
    })
  )
};
const openStyle = `
  height: 100%;
  padding: 2rem;
`;
const WrapperCollapsible = styled.ul`
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  margin: 0.5rem 0 1rem 0;
  padding-left: 0;
  list-style-type: none;
`;

const CollapsibleHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.5;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  :focus {
    outline: 0;
    background-color: #eee;
  }
`;
const CollapsibleBody = styled.div`
  height: 0;
  border-bottom: 1px solid #ddd;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 2rem;
  overflow: hidden;
  transition: padding 0.3s linear, height 0.3s linear;
  ${props => props.isOpen && openStyle};
`;

export default Collapsible;

// .collapsible.popout {
//   border: none;
//   -webkit-box-shadow: none;
//           box-shadow: none;
// }

// .collapsible.popout > li {
//   -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
//           box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
//   margin: 0 24px;
//   -webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// }

// .collapsible.popout > li.active {
//   -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
//           box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
//   margin: 16px 0;
// }
