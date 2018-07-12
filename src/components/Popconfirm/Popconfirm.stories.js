import React from 'react';
import { storiesOf } from '@storybook/react';
import Popconfirm from './index';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Popconfirm', module).add('Popconfirm', () => (
  <Popconfirm open={boolean('open', false)} onClick={action('clicked')} title="A You sure delete this item?" />
));
