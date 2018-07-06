import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsible from './index';

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
  .add('Collapsible ', () => <Collapsible data={MockData} />)
  .add('Collapsible popout', () => <Collapsible data={MockData} popout />);
