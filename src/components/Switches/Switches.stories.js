import React from 'react';
import { storiesOf } from '@storybook/react';
import Switches from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Switches', module)
  .add(
    'Switches',
    withInfo({
      header: false,
      inline: true
    })(() => <Switches checked />)
  )
  .add(
    'Switches disabled',
    withInfo({
      header: false,
      inline: true
    })(() => <Switches disabled />)
  );
