import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FloatingAction from './index';
import Icon from '../Icon';
import { withInfo } from '@storybook/addon-info';

storiesOf('FloatingAction', module)
  .add(
    'FloatingAction',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <FloatingAction name={'Menu'}>
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'ExpandMore'} clr="blue" act={action('clicked3')} />
        <Icon name={'Done'} clr="purple" act={action('clicked4')} />
      </FloatingAction>
    ))
  )
  .add(
    'FloatingAction toggle',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <FloatingAction name={'Create'} toggle>
        <Icon name={'Clear'} clr="red" act={action('clicked1')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'ExpandMore'} clr="blue" act={action('clicked3')} />
        <Icon name={'Done'} clr="purple" act={action('clicked4')} />
      </FloatingAction>
    ))
  )
  .add(
    'FloatingAction fixed toggle',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <FloatingAction name={'Create'} fixed toggle>
        <Icon name={'Clear'} clr="red" act={action('clicked1')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'Add'} clr="green" act={action('clicked2')} />
        <Icon name={'ExpandMore'} clr="blue" act={action('clicked3')} />
      </FloatingAction>
    ))
  );
