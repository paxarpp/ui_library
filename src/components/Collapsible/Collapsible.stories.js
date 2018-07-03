import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsible from './index';
import { withInfo } from '@storybook/addon-info';

const MockData = [
  {
    header: 'First',
    content:
      'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
  },
  {
    header: 'Second',
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'
  },
  {
    header: 'Third',
    content: 'Lorem ipsum dolor sit amet'
  }
];

storiesOf('Collapsible', module)
  .add(
    'Collapsible ',
    withInfo({
      header: false,
      inline: true
    })(() => <Collapsible data={MockData} />)
  )
  .add(
    'Collapsible popout',
    withInfo({
      header: false,
      inline: true
    })(() => <Collapsible data={MockData} popout />)
  );
