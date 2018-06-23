import React from 'react';
import { storiesOf } from '@storybook/react';
import { Preloader2, Preloader7 } from './index';

storiesOf('Preloader', module)
  .add('Preloader2 color=blue size=64px', () => <Preloader2 size={'64px'} color={'blue'} />)
  .add('Preloader2 ', () => <Preloader2 />)
  .add('Preloader2 color=red size=32px', () => <Preloader2 size={'32px'} color={'red'} />)
  .add('Preloader7', () => <Preloader7 />)
  .add('Preloader7 size=18px color=red', () => <Preloader7 size={'18px'} color={'red'} />);
