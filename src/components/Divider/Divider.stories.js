import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './index';

storiesOf('Divider', module)
  .add('Divider max', () => <Divider max={true} />)
  .add('Divider max center whith text', () => <Divider max={true}>Test</Divider>)
  .add('Divider max start whith text', () => (
    <Divider max={true} start={true}>
      Test
    </Divider>
  ))
  .add('Divider end whith text', () => <Divider end={true}>Test</Divider>)
  .add('Divider ', () => <Divider />);
