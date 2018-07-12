import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './index';

const MockData = [
  {
    tab: '1Alvin Link',
    content:
      '111 T1he corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible.  '
  },
  {
    tab: '2Alan Link',
    content:
      '22 The tabs of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. '
  },
  {
    tab: '3Jonathan Link',
    content:
      '33The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. '
  }
];

storiesOf('Tabs', module)
  .add('Tabs', () => <Tabs data={MockData} />)
  .add('Tabs content danger', () => <Tabs data={MockData} content danger />)
  .add('Tabs content anim second', () => <Tabs data={MockData} content anim second />);
