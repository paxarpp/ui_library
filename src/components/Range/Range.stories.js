import React from 'react';
import { storiesOf } from '@storybook/react';
import Range from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Range', module).add(
  'Range ',
  withInfo({
    header: false,
    inline: true
  })(() => <Range min={0} max={100} />)
);
