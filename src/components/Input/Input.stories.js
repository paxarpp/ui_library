import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

storiesOf('Input', module)
  .add('Input type text', () => <Input type={'text'} placeholder={'text'} />)
  .add('Input type text disabled', () => <Input type={'text'} placeholder={'disable'} disabled />)
  .add('Input type password', () => <Input type={'password'} placeholder={'password'} />)
  .add('Input type name user whit check correct', () => (
    <Input type={'text'} placeholder={'name'} regexp={/^[a-zA-Z][a-zA-Z0-9]{1,10}$/} />
  ));
