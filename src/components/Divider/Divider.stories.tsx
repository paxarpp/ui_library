import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './index';

storiesOf('Divider', module)
  .add('Divider max', () => <Divider max />)
  .add('Divider max center whith text', () => <Divider max>Test</Divider>)
  .add('Divider max start whith text', () => (
    <Divider max start>
      Test
    </Divider>
  ))
  .add('Divider end whith text', () => <Divider end>Test</Divider>)
  .add('Divider ', () => <Divider />);
