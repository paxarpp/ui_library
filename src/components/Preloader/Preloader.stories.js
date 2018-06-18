import React from 'react';
import { storiesOf } from '@storybook/react';
import Preloader from './index';

storiesOf('Preloader', module)
  .add('Preloader big blue', () => <Preloader big blue />)
  .add('Preloader ', () => <Preloader />)
  .add('Preloader small red', () => <Preloader small red />);
