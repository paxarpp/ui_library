import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ButtonArrow, Button, ButtonEllipse } from './index';

storiesOf('Button', module)
  .add('with button', () => <Button onClick={action('clicked')}>Установи приложение</Button>)
  .add('with link ellipse style', () => <ButtonEllipse onClick={action('clicked')}>Join</ButtonEllipse>)

