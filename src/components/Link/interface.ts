export interface PositionProps {
  readonly center?: boolean;
  readonly right?: boolean;
  readonly left?: boolean;
}

export interface IProps extends IWrapperProps {
  /** url for Link */
  readonly url: string;
};

export interface IWrapperProps {
  /** what see in Link */
  readonly children?: any;
  /** color text , line and any output in Link */
  readonly color?: string;
  /** the start point of the underscore animation */
  readonly left?: boolean;
  readonly right?: boolean;
  readonly center?: boolean;
  /** lowercase if exist, or default uppercase */
  readonly lowercase?: boolean;
};
