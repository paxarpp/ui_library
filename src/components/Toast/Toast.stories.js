import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

storiesOf('Toast', module)
  .add('Toast', () => (
    <Toast>
      <span>I am Toast !</span>
    </Toast>
  ))
  .add('Toast duration=1200 height=200 width=500', () => (
    <Toast duration={1200} height={200} width={500}>
      <span>I am quick Toast !</span>
    </Toast>
  ));
