import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonMain } from './index';

storiesOf('Button', module)
  .add('with button', () => <Button handlerClick={action('clicked')}>текст</Button>)
  .add('with button main', () => <ButtonMain handlerClick={action('clicked')}>войти</ButtonMain>)
  .add('with button main large', () => (
    <ButtonMain handlerClick={action('clicked')} large={true} second={true}>
      войти
    </ButtonMain>
  ))
  .add('with button main small', () => (
    <ButtonMain handlerClick={action('clicked')} small={true} danger={true}>
      войти
    </ButtonMain>
  ));
