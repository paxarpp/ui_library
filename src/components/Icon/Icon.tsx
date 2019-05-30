import React, { PureComponent } from 'react';
import SVGInline from 'react-svg-inline';
import { Wrapper } from './style';
import * as Icons from '../../components/assets';

interface IProps {
  name: string;
  onClick?: () => void;
  size?: string | number;
  color?: string;
  colorHover?: string;
  style?: any;
  /** for best compatibility Wrapper SC */
  className?: string;
  disable?: boolean;
}

export default class Icon extends PureComponent<IProps> {
  render() {
    const { name, className } = this.props;
    const Icon = Icons[name] ? Icons[name] : Icons['default'];
    return (
      <Wrapper {...this.props} className={className}>
        {<SVGInline svg={Icon} />}
      </Wrapper>
    );
  }
}
