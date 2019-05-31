export interface IBase {
  children?: any;
  className?: any;
  duration?: number;
  width?: number;
  height?: number;
  animationID?: string;
};
export interface IProps extends IBase {
  handlerAddToast: (f: () => void) => any;
};
export interface IState {
  items: number[];
  timers: number[];
};
export interface IAnimation extends IBase {
  timeout: number;
}
export interface IDiv extends IBase {
  onClick: () => void;
}
