export interface IProps extends IBase {
    /** function handler click*/
    handlerClick?: () => void; 
};
export interface IMain extends IBase { 
    onClick?: () => void
};
interface IBase { 
    /** title button*/
    children?: any;
    /** size button */
    large?: boolean;
    /** color button */
    second?: boolean;
    /** color button */
    danger?: boolean;
    /** size button */
    small?: boolean;
    /** disable button behavior */
    disable?: boolean;
    /** для совместимости */
    className?: string,
    /** user color button */
    color?: string,
    /** square button view */
    border?: boolean;
    /** rounded button view */
    rounded?: boolean;
    /** the button is not raised above the surface */
    bottom?: boolean;
};