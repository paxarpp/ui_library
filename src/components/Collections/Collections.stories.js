import React from 'react';
import { storiesOf } from '@storybook/react';
import Collections from './index';
import { withInfo } from '@storybook/addon-info';
import Icon from '../Icon';

const MockData = [
  'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  'Sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet'
];
const MockData2 = [
  ['Lorem ipsum dolor', <Icon key={'1'} name="Create" />],
  ['Sit ametLorem ametLorem ipsum dolor sit amet', <Icon key={'3'} name="Done" color="green" />],
  ['Ipsum dolor sit amet', <Icon key={'2'} name="Create" />]
];

storiesOf('Collections', module)
  .add(
    'Collections ',
    withInfo({
      header: false,
      inline: true
    })(() => <Collections data={MockData} />)
  )
  .add(
    'Collections header',
    withInfo({
      header: false,
      inline: true
    })(() => <Collections data={MockData} header={MockData[2]} />)
  )
  .add(
    'Collections active ',
    withInfo({
      header: false,
      inline: true
    })(() => <Collections data={MockData} active />)
  )
  .add(
    'Collections + icon ',
    withInfo({
      header: false,
      inline: true
    })(() => <Collections data={MockData2} />)
  );
