import React from 'react';
import { storiesOf } from '@storybook/react';
import { Preloader1, Preloader2, Preloader3, Preloader4, Preloader7, Determinate, Indeterminate } from './index';

storiesOf('Preloader', module)
  .add('Determinate 70', () => <Determinate width={70} />)
  .add('Indeterminate', () => <Indeterminate />)
  .add('Preloader1 color=black size=24px', () => <Preloader1 size={'24px'} color={'black'} />)
  .add('Preloader1 ', () => <Preloader1 />)
  .add('Preloader2 color=blue size=64px', () => <Preloader2 size={'64px'} color={'blue'} />)
  .add('Preloader2 ', () => <Preloader2 />)
  .add('Preloader2 color=red size=32px', () => <Preloader2 size={'32px'} color={'red'} />)
  .add('Preloader3  // bgColor если фон отличен от белого ', () => <Preloader3 />)
  .add('Preloader3 color=red size=32px', () => <Preloader3 size={'32px'} color={'red'} />)
  .add('Preloader4  // bgColor если фон отличен от белого ', () => <Preloader4 />)
  .add('Preloader4 color=blue size=12px', () => <Preloader4 size={'12px'} color={'blue'} />)
  .add('Preloader7', () => <Preloader7 />)
  .add('Preloader7 size=18px color=red', () => <Preloader7 size={'18px'} color={'red'} />);
