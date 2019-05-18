import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './style';

const ButtonMain = ({ children, handlerClick, disable, className, ...props }) => (
  <Main onClick={disable ? null : handlerClick} disable={disable} {...props} className={className}>
    {children}
  </Main>
);

ButtonMain.propTypes = {
  /** function handler click*/
  handlerClick: PropTypes.func,
  /** title button*/
  children: PropTypes.any,
  /** size button */
  large: PropTypes.bool,
  /** color button */
  second: PropTypes.bool,
  /** color button */
  danger: PropTypes.bool,
  /** size button */
  small: PropTypes.bool,
  /** disable button behavior */
  disable: PropTypes.bool,
  /** для совместимости */
  className: PropTypes.string,
  /** user color button */
  color: PropTypes.string,
  /** square button view */
  border: PropTypes.bool,
  /** rounded button view */
  rounded: PropTypes.bool,
  /** the button is not raised above the surface */
  bottom: PropTypes.bool
};

export default ButtonMain;
