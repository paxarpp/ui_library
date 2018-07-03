import React from 'react';
import { storiesOf } from '@storybook/react';
import { Preloader1, Preloader2, Preloader3, Preloader4, Preloader7 } from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Preloader', module)
  .add(
    'Preloader1 color=black size=24px',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader1 size={'24px'} color={'black'} />)
  )
  .add(
    'Preloader1 ',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader1 />)
  )
  .add(
    'Preloader2 color=blue size=64px',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader2 size={'64px'} color={'blue'} />)
  )
  .add(
    'Preloader2 ',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader2 />)
  )
  .add(
    'Preloader2 color=red size=32px',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader2 size={'32px'} color={'red'} />)
  )
  .add(
    'Preloader3  // bgColor если фон отличен от белого ',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader3 />)
  )
  .add(
    'Preloader3 color=red size=32px',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader3 size={'32px'} color={'red'} />)
  )
  .add(
    'Preloader4  // bgColor если фон отличен от белого ',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader4 />)
  )
  .add(
    'Preloader4 color=blue size=12px',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader4 size={'12px'} color={'blue'} />)
  )
  .add(
    'Preloader7',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader7 />)
  )
  .add(
    'Preloader7 size=18px color=red',
    withInfo({
      header: false,
      inline: true
    })(() => <Preloader7 size={'18px'} color={'red'} />)
  );
