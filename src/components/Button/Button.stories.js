import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonMain } from './index';

storiesOf('Button', module)
  .add('with button', () => <Button onClick={action('clicked')}>текст</Button>)
  .add('with button main', () => <ButtonMain onClick={action('clicked')}>войти</ButtonMain>)
  .add('with button main large', () => (
    <ButtonMain onClick={action('clicked')} large={true} second={true}>
      войти
    </ButtonMain>
  ))
  .add('with button main small', () => (
    <ButtonMain onClick={action('clicked')} small={true} danger={true}>
      войти
    </ButtonMain>
  ));
