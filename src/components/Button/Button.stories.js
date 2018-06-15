import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonMain, ButtonFloat } from './index';

storiesOf('Button', module)
  .add('with button', () => <Button onClick={action('clicked')}>текст</Button>)
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
  ))
  .add('with ButtonFloat', () => <ButtonFloat handlerClick={action('clicked')} />)
  .add('with ButtonFloat large', () => <ButtonFloat handlerClick={action('clicked')} large={true} second={true} />)
  .add('with ButtonFloat small', () => <ButtonFloat handlerClick={action('clicked')} small={true} danger={true} />);
