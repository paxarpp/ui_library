import React from 'react';
import { storiesOf } from '@storybook/react';
import Popconfirm from './index';

storiesOf('Popconfirm', module).add('Popconfirm', () => <Popconfirm title="A You sure delete this item?" />);
