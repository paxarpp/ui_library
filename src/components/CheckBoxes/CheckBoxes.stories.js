import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBoxes from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('CheckBoxes', module)
  .add(
    'CheckBoxes ',
    withInfo({
      header: false,
      inline: true
    })(() => <CheckBoxes>red</CheckBoxes>)
  )
  .add(
    'CheckBoxes filled checked',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <CheckBoxes filled checked>
        blue
      </CheckBoxes>
    ))
  )
  .add(
    'CheckBoxes filled checked disabled',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <CheckBoxes filled checked disabled>
        blue
      </CheckBoxes>
    ))
  )
  .add(
    'CheckBoxes filled disabled',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <CheckBoxes filled disabled>
        blue
      </CheckBoxes>
    ))
  )
  .add(
    'CheckBoxes checked',
    withInfo({
      header: false,
      inline: true
    })(() => <CheckBoxes checked>green</CheckBoxes>)
  )
  .add(
    'CheckBoxes checked disabled',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <CheckBoxes checked disabled>
        green
      </CheckBoxes>
    ))
  )
  .add(
    'CheckBoxes disabled',
    withInfo({
      header: false,
      inline: true
    })(() => <CheckBoxes disabled>grey</CheckBoxes>)
  );
