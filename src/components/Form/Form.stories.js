import React from 'react';
import { storiesOf } from '@storybook/react';
import { Style1, Style2 } from './index';

storiesOf('Form', module)
  .add('Style1 ', () => <Style1 />)
  .add('Style2 ', () => <Style2 />);
