export interface IProps extends IBase {
    /** function handler click*/
    handlerClick?: () => void; 
};
export interface IMain extends IBase { 
    onClick?: () => void
};
interface IBase { 
  /** title button*/
  children: any;
  /** size button */
  large: boolean;
  /** color button */
  second: boolean;
  /** color button */
  danger: boolean;
  /** user color button */
  color: boolean;
  /** size button */
  small: boolean;
  /** disable button behavior */
  disable: boolean;
  /** для совместимости */
  className: string;
  /** ripple effect */
  pulse: boolean;
};