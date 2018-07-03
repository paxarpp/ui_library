import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './index';
import { withInfo } from '@storybook/addon-info';

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
  .add(
    'Table ',
    withInfo({
      header: false,
      inline: true
    })(() => <Table data={MockData} />)
  )
  .add(
    'Table striped',
    withInfo({
      header: false,
      inline: true
    })(() => <Table data={MockData} striped />)
  )
  .add(
    'Table highlight',
    withInfo({
      header: false,
      inline: true
    })(() => <Table data={MockData} highlight />)
  )
  .add(
    'Table centered',
    withInfo({
      header: false,
      inline: true
    })(() => <Table data={MockData} centered />)
  )
  .add(
    'Table striped highlight',
    withInfo({
      header: false,
      inline: true
    })(() => <Table data={MockData} striped highlight />)
  );
