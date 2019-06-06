export interface IDivider extends IWrap {
  /** what render on divider (text etc) */
  children?: any;
};

export interface IWrap {
    /** width = 100% */
    max?: boolean;
    /** children located in the end divider */
    end?: boolean;
    /** children located in the start divider */
    start?: boolean;
}
