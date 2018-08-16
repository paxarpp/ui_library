import React from 'react';
import { storiesOf } from '@storybook/react';
import { Style1, Style2, Materialize } from './index';

storiesOf('Form', module)
  .add('Materialize ', () => <Materialize />)
  .add('Style1 ', () => <Style1 />)
  .add('Style2 ', () => <Style2 />);
