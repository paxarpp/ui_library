import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Style1, Style2, Materialize } from './index';

storiesOf('Form', module)
  .add('Materialize ', () => <Materialize formValue={value => action(value)(value)} />)
  .add('Style1 ', () => <Style1 />)
  .add('Style2 ', () => <Style2 />);
