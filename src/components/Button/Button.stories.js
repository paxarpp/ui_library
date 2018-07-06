import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Primary, Float, Flat } from './index';

storiesOf('Button', module)
  .add('button Flat', () => <Flat handlerClick={action('clicked')}>Agree</Flat>)
  .add('button Flat disable', () => (
    <Flat handlerClick={action('clicked')} disable>
      Agree
    </Flat>
  ))
  .add('button Flat danger large', () => (
    <Flat handlerClick={action('clicked')} large danger>
      Disagree
    </Flat>
  ))
  .add('button Flat second small', () => (
    <Flat handlerClick={action('clicked')} small second>
      Agree
    </Flat>
  ))
  .add('button Primary', () => <Primary handlerClick={action('clicked')}>войти</Primary>)
  .add('button Primary disable', () => (
    <Primary handlerClick={action('clicked')} disable>
      войти
    </Primary>
  ))
  .add('button Primary second large', () => (
    <Primary handlerClick={action('clicked')} large second>
      войти
    </Primary>
  ))
  .add('button Primary danger small', () => (
    <Primary handlerClick={action('clicked')} small danger>
      войти
    </Primary>
  ))
  .add('Float', () => <Float handlerClick={action('clicked')} />)
  .add('Float second large', () => <Float handlerClick={action('clicked')} large second />)
  .add('Float second disable', () => <Float handlerClick={action('clicked')} large disable />)
  .add('Float danger small pulse', () => <Float handlerClick={action('clicked')} small danger pulse />)
  .add('Float danger small', () => <Float handlerClick={action('clicked')} small danger />)
  .add('Float danger small with children', () => (
    <Float handlerClick={action('clicked')} small danger>
      DEL
    </Float>
  ));
