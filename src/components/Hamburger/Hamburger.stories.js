import React from 'react';
import { storiesOf } from '@storybook/react';
import Hamburger from './index';

storiesOf('Hamburger slider', module)
  .add('Hamburger slider', () => <Hamburger anim="slider" />)
  .add('Hamburger spin', () => <Hamburger anim="spin" />)
  .add('Hamburger spring', () => <Hamburger anim="spring" />);
