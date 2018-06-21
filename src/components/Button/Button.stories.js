import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ButtonMain, ButtonFloat } from './index';

storiesOf('Button', module)
  .add('button main', () => <ButtonMain handlerClick={action('clicked')}>войти</ButtonMain>)
  .add('button main disable', () => (
    <ButtonMain handlerClick={action('clicked')} disable>
      войти
    </ButtonMain>
  ))
  .add('button second large', () => (
    <ButtonMain handlerClick={action('clicked')} large second>
      войти
    </ButtonMain>
  ))
  .add('button danger small', () => (
    <ButtonMain handlerClick={action('clicked')} small danger>
      войти
    </ButtonMain>
  ))
  .add('ButtonFloat', () => <ButtonFloat handlerClick={action('clicked')} />)
  .add('ButtonFloat second large', () => <ButtonFloat handlerClick={action('clicked')} large second />)
  .add('ButtonFloat second disable', () => <ButtonFloat handlerClick={action('clicked')} large disable />)
  .add('ButtonFloat danger small pulse', () => <ButtonFloat handlerClick={action('clicked')} small danger pulse />)
  .add('ButtonFloat danger small', () => <ButtonFloat handlerClick={action('clicked')} small danger />)
  .add('ButtonFloat danger small with children', () => (
    <ButtonFloat handlerClick={action('clicked')} small danger>
      DEL
    </ButtonFloat>
  ));
