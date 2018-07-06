import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

storiesOf('Pagination', module).add('Pagination', () => <Pagination length={6} maxPages={10} />);
