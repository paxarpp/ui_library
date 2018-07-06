import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBoxes from './index';

storiesOf('CheckBoxes', module)
  .add('CheckBoxes ', () => <CheckBoxes>red</CheckBoxes>)
  .add('CheckBoxes filled checked', () => (
    <CheckBoxes filled checked>
      blue
    </CheckBoxes>
  ))
  .add('CheckBoxes filled checked disabled', () => (
    <CheckBoxes filled checked disabled>
      blue
    </CheckBoxes>
  ))
  .add('CheckBoxes filled disabled', () => (
    <CheckBoxes filled disabled>
      blue
    </CheckBoxes>
  ))
  .add('CheckBoxes checked', () => <CheckBoxes checked>green</CheckBoxes>)
  .add('CheckBoxes checked disabled', () => (
    <CheckBoxes checked disabled>
      green
    </CheckBoxes>
  ))
  .add('CheckBoxes disabled', () => <CheckBoxes disabled>grey</CheckBoxes>);
