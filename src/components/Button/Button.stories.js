import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Primary, Float, Flat } from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add(
    'button Flat',
    withInfo({
      header: false,
      inline: true
    })(() => <Flat handlerClick={action('clicked')}>Agree</Flat>)
  )
  .add(
    'button Flat disable',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Flat handlerClick={action('clicked')} disable>
        Agree
      </Flat>
    ))
  )
  .add(
    'button Flat danger large',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Flat handlerClick={action('clicked')} large danger>
        Disagree
      </Flat>
    ))
  )
  .add(
    'button Flat second small',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Flat handlerClick={action('clicked')} small second>
        Agree
      </Flat>
    ))
  )
  .add(
    'button Primary',
    withInfo({
      header: false,
      inline: true
    })(() => <Primary handlerClick={action('clicked')}>войти</Primary>)
  )
  .add(
    'button Primary disable',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Primary handlerClick={action('clicked')} disable>
        войти
      </Primary>
    ))
  )
  .add(
    'button Primary second large',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Primary handlerClick={action('clicked')} large second>
        войти
      </Primary>
    ))
  )
  .add(
    'button Primary danger small',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Primary handlerClick={action('clicked')} small danger>
        войти
      </Primary>
    ))
  )
  .add(
    'Float',
    withInfo({
      header: false,
      inline: true
    })(() => <Float handlerClick={action('clicked')} />)
  )
  .add(
    'Float second large',
    withInfo({
      header: false,
      inline: true
    })(() => <Float handlerClick={action('clicked')} large second />)
  )
  .add(
    'Float second disable',
    withInfo({
      header: false,
      inline: true
    })(() => <Float handlerClick={action('clicked')} large disable />)
  )
  .add(
    'Float danger small pulse',
    withInfo({
      header: false,
      inline: true
    })(() => <Float handlerClick={action('clicked')} small danger pulse />)
  )
  .add(
    'Float danger small',
    withInfo({
      header: false,
      inline: true
    })(() => <Float handlerClick={action('clicked')} small danger />)
  )
  .add(
    'Float danger small with children',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Float handlerClick={action('clicked')} small danger>
        DEL
      </Float>
    ))
  );
