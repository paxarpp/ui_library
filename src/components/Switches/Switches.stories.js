import React from 'react';
import { storiesOf } from '@storybook/react';
import Switches from './index';

storiesOf('Switches', module)
  .add('Switches', () => <Switches checked />)
  .add('Switches disabled', () => <Switches disabled />);
