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
  },
  {
    Name: 'Alvin dddd',
    Item_Name: 'Eclair sdfsd',
    Item_Price: '$30.87'
  },
  {
    Name: 'Alan fgfh',
    Item_Name: 'Jellybean g',
    Item_Price: '$23.76'
  },
  {
    Name: 'Jonathan sdfasdf',
    Item_Name: 'Lollipop hhhhhhhhhhh',
    Item_Price: '$71.00'
  }
];

storiesOf('Table', module)
  .add('Table ', () => <Table data={MockData} />)
  .add('Table sticked', () => <Table data={MockData} sticked />)
  .add('Table striped', () => <Table data={MockData} striped />)
  .add('Table highlight', () => <Table data={MockData} highlight />)
  .add('Table centered', () => <Table data={MockData} centered />)
  .add('Table striped highlight sticked', () => <Table data={MockData} striped highlight sticked />);
