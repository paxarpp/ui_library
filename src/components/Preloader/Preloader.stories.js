import React from 'react';
import { storiesOf } from '@storybook/react';
import Preloader from './index';

storiesOf('Preloader', module)
  .add('Preloader big', () => <Preloader big />)
  .add('Preloader ', () => <Preloader />)
  .add('Preloader small', () => <Preloader small />);
