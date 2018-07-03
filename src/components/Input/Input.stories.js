import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Input', module)
  .add(
    'Input type text',
    withInfo({
      header: false,
      inline: true
    })(() => <Input type={'text'} placeholder={'text'} />)
  )
  .add(
    'Input type text disabled',
    withInfo({
      header: false,
      inline: true
    })(() => <Input type={'text'} placeholder={'disable'} disabled />)
  )
  .add(
    'Input type password',
    withInfo({
      header: false,
      inline: true
    })(() => <Input type={'password'} placeholder={'password'} />)
  );
