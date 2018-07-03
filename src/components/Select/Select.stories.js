import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Select', module).add(
  'Select',
  withInfo({
    header: false,
    inline: true
  })(() => <Select placeholder={'Select Selected'} />)
);
