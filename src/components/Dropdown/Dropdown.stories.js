import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './index';

import Divider from '../Divider';

storiesOf('Dropdown', module).add('Dropdown ', () => (
  <Dropdown skip={3}>
    <span>1</span>
    <span>2</span>
    <Divider max />
    <span>3</span>
    <span>4</span>
  </Dropdown>
));
