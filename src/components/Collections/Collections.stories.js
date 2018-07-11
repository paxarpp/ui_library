import React from 'react';
import { storiesOf } from '@storybook/react';
import Collections from './index';
import { action } from '@storybook/addon-actions';
import { Icon } from '../Icon';

const MockData = [
  'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  'Sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet'
];
const MockData2 = [
  ['Lorem ipsum dolor', <Icon key={'1'} name="create" onClick={action('clicked')} />],
  [
    'Sit ametLorem ametLorem ipsum dolor sit amet',
    <Icon key={'3'} name="done" color="green" onClick={action('clicked')} />
  ],
  ['Ipsum dolor sit amet', <Icon key={'2'} name="create" onClick={action('clicked')} />]
];

storiesOf('Collections', module)
  .add('Collections ', () => <Collections data={MockData} />)
  .add('Collections header', () => <Collections data={MockData} header={MockData[2]} />)
  .add('Collections active ', () => <Collections data={MockData} active handlerClick={action('clicked')} />)
  .add('Collections + icon ', () => <Collections data={MockData2} />);
