export interface IProps extends ISpanProps {
  /** view the badge and callback click */
  handler?: (event: React.MouseEvent) => void;
};

export interface ISpanProps {
  /** value on the screen */
  count?: string | number;
  /** view the block */
  badge?: boolean;
  block?: boolean;
  /** color background */
  color?: string;
}
