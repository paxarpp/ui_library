import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonMain } from './index';

storiesOf('Button', module)
  .add('with button', () => <Button onClick={action('clicked')}>текст</Button>)
  .add('with link ellipse style', () => <ButtonMain onClick={action('clicked')}>войти</ButtonMain>);
