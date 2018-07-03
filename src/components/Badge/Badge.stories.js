import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeFloat } from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Badge', module)
  .add(
    'Badge 4',
    withInfo({
      header: false,
      inline: true
    })(() => <Badge count={4} />)
  )
  .add(
    'Badge block 10',
    withInfo({
      header: false,
      inline: true
    })(() => <Badge count={10} block />)
  )
  .add(
    'Badge block red 8',
    withInfo({
      header: false,
      inline: true
    })(() => <Badge count={8} block red />)
  )
  .add(
    'BadgeFloat block 9',
    withInfo({
      header: false,
      inline: true
    })(() => <BadgeFloat count={9} />)
  )
  .add(
    'BadgeFloat block red 16',
    withInfo({
      header: false,
      inline: true
    })(() => <BadgeFloat count={16} red />)
  );
