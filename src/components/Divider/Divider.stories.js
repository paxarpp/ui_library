import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Divider', module)
  .add(
    'Divider max',
    withInfo({
      header: false,
      inline: true
    })(() => <Divider max />)
  )
  .add(
    'Divider ',
    withInfo({
      header: false,
      inline: true
    })(() => <Divider />)
  );
