import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Pagination', module).add(
  'Pagination',
  withInfo({
    header: false,
    inline: true
  })(() => <Pagination length={6} maxPages={10} />)
);
