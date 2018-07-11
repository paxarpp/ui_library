import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FloatingAction from './index';
import { Icon } from '../Icon';

storiesOf('FloatingAction', module)
  .add('FloatingAction', () => (
    <FloatingAction name={'menu'}>
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'expandMore'} clr="blue" act={action('clicked3')} />
      <Icon name={'done'} clr="purple" act={action('clicked4')} />
    </FloatingAction>
  ))
  .add('FloatingAction toggle', () => (
    <FloatingAction name={'create'} toggle>
      <Icon name={'clear'} clr="red" act={action('clicked1')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'expandMore'} clr="blue" act={action('clicked3')} />
      <Icon name={'done'} clr="purple" act={action('clicked4')} />
    </FloatingAction>
  ))
  .add('FloatingAction fixed toggle', () => (
    <FloatingAction name={'create'} fixed toggle>
      <Icon name={'clear'} clr="red" act={action('clicked1')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'add'} clr="green" act={action('clicked2')} />
      <Icon name={'expandMore'} clr="blue" act={action('clicked3')} />
    </FloatingAction>
  ));
