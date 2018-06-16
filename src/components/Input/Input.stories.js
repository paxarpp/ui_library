import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

storiesOf('Input', module)
  .add('Input type text', () => <Input type={'text'} placeholder={'text'} />)
  .add('Input type text disabled', () => <Input type={'text'} placeholder={'disable'} disabled />)
  .add('Input type password', () => <Input type={'password'} placeholder={'password'} />);
