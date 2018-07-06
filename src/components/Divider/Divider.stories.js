import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './index';

storiesOf('Divider', module)
  .add('Divider max', () => <Divider max />)
  .add('Divider ', () => <Divider />);
