import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './index';

const MockData = [
  {
    Name: 'Alvin',
    Item_Name: 'Eclair',
    Item_Price: '$0.87'
  },
  {
    Name: 'Alan',
    Item_Name: 'Jellybean',
    Item_Price: '$3.76'
  },
  {
    Name: 'Jonathan',
    Item_Name: 'Lollipop',
    Item_Price: '$7.00'
  }
];

storiesOf('Table', module)
  .add('Table ', () => <Table data={MockData} />)
  .add('Table striped', () => <Table data={MockData} striped />)
  .add('Table highlight', () => <Table data={MockData} highlight />)
  .add('Table centered', () => <Table data={MockData} centered />)
  .add('Table striped highlight', () => <Table data={MockData} striped highlight />);
