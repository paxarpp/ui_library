import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';
const data = [
  {
    val: '1',
    dis: 'option1'
  },
  {
    val: '2',
    dis: 'option2'
  },
  {
    val: '3',
    dis: 'option3'
  }
];

storiesOf('Select', module)
  .add('Select', () => <Select data={data} placeholder={'Select something'} />)
  .add('Select stop', () => <Select stop data={data} placeholder={'Select something'} />);
