import React from 'react';
import { storiesOf } from '@storybook/react';
import Collections from './index';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Icon from '../Icon';

const MockData = [
  'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  'Sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet'
];
const MockData2 = [
  ['Lorem ipsum dolor', <Icon key={'1'} name="Create" onClick={action('clicked')} />],
  [
    'Sit ametLorem ametLorem ipsum dolor sit amet',
    <Icon key={'3'} name="Done" color="green" onClick={action('clicked')} />
  ],
  ['Ipsum dolor sit amet', <Icon key={'2'} name="Create" onClick={action('clicked')} />]
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
    })(() => <Collections data={MockData} active handlerClick={action('clicked')} />)
  )
  .add(
    'Collections + icon ',
    withInfo({
      header: false,
      inline: true
    })(() => <Collections data={MockData2} />)
  );
