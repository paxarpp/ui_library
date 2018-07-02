import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Float } from '../Button';

class FloatingAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const { children, name, color, ...props } = this.props;
    const { open } = this.state;
    return (
      <Wrap className="fixed-action-btn">
        <Float large color={color} {...props} handlerClick={() => this.setState({ open: !open })}>
          <Icon name={name} />
        </Float>
        {open && (
          <WrapAction>
            {children.map((el, indx) => (
              <Float key={indx} color={el.props.clr} small>
                {el}
              </Float>
            ))}
          </WrapAction>
        )}
      </Wrap>
    );
  }
}
FloatingAction.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  color: PropTypes.string
};
const isFixed = props =>
  props.fixed &&
  css`
    position: fixed;
    right: 23px;
    bottom: 23px;
    padding-top: 15px;
    margin-bottom: 0;
  `;
const Wrap = styled.div`
  position: relativ;
  ${isFixed};
  z-index: 997;
`;
const WrapAction = styled.div`
  width: 30%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 30px;
  left: 75px;
`;

export default FloatingAction;

// .fixed-action-btn.active ul {
//   visibility: visible;
// }

// .fixed-action-btn.direction-left, .fixed-action-btn.direction-right {
//   padding: 0 0 0 15px;
// }

// .fixed-action-btn.direction-left ul, .fixed-action-btn.direction-right ul {
//   text-align: right;
//   right: 64px;
//   top: 50%;
//   -webkit-transform: translateY(-50%);
//           transform: translateY(-50%);
//   height: 100%;
//   left: auto;
//   /*width 100% only goes to width of button container */
//   width: 500px;
// }

// .fixed-action-btn.direction-left ul li, .fixed-action-btn.direction-right ul li {
//   display: inline-block;
//   margin: 7.5px 15px 0 0;
// }

// .fixed-action-btn.direction-right {
//   padding: 0 15px 0 0;
// }

// .fixed-action-btn.direction-right ul {
//   text-align: left;
//   direction: rtl;
//   left: 64px;
//   right: auto;
// }

// .fixed-action-btn.direction-right ul li {
//   margin: 7.5px 0 0 15px;
// }

// .fixed-action-btn.direction-bottom {
//   padding: 0 0 15px 0;
// }

// .fixed-action-btn.direction-bottom ul {
//   top: 64px;
//   bottom: auto;
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: reverse;
//   -webkit-flex-direction: column-reverse;
//       -ms-flex-direction: column-reverse;
//           flex-direction: column-reverse;
// }

// .fixed-action-btn.direction-bottom ul li {
//   margin: 15px 0 0 0;
// }

// .fixed-action-btn.toolbar {
//   padding: 0;
//   height: 56px;
// }

// .fixed-action-btn.toolbar.active > a i {
//   opacity: 0;
// }

// .fixed-action-btn.toolbar ul {
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
// }

// .fixed-action-btn.toolbar ul li {
//   -webkit-box-flex: 1;
//   -webkit-flex: 1;
//       -ms-flex: 1;
//           flex: 1;
//   display: inline-block;
//   margin: 0;
//   height: 100%;
//   -webkit-transition: none;
//   transition: none;
// }

// .fixed-action-btn.toolbar ul li a {
//   display: block;
//   overflow: hidden;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background-color: transparent;
//   -webkit-box-shadow: none;
//           box-shadow: none;
//   color: #fff;
//   line-height: 56px;
//   z-index: 1;
// }

// .fixed-action-btn.toolbar ul li a i {
//   line-height: inherit;
// }

// .fixed-action-btn ul {
//   left: 0;
//   right: 0;
//   text-align: center;
//   position: absolute;
//   bottom: 64px;
//   margin: 0;
//   visibility: hidden;
// }

// .fixed-action-btn ul li {
//   margin-bottom: 15px;
// }

// .fixed-action-btn ul a.btn-floating {
//   opacity: 0;
// }

// .fixed-action-btn .fab-backdrop {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   width: 40px;
//   height: 40px;
//   background-color: #26a69a;
//   border-radius: 50%;
//   -webkit-transform: scale(0);
//           transform: scale(0);
// }
