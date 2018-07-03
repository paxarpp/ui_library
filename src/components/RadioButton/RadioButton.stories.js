import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('RadioButton', module).add(
  'RadioButton ',
  withInfo({
    header: false,
    inline: true
  })(() => <RadioButton name={'group1'}>bounty</RadioButton>)
);
