import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwitchW, SwitchM } from './index';

storiesOf('Switches', module)
  .add('SwitchW', () => <SwitchW checked />)
  .add('SwitchW disabled', () => <SwitchW disabled />)
  .add('SwitchM', () => <SwitchM checked />)
  .add('SwitchM disabled', () => <SwitchM disabled />);
