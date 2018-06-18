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
  .add('CheckBoxes checked', () => <CheckBoxes checked>green</CheckBoxes>)
  .add('CheckBoxes disabled', () => <CheckBoxes disabled>grey</CheckBoxes>);
