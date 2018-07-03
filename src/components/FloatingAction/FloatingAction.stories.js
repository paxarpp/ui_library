import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FloatingAction from './index';
import Icon from '../Icon';

storiesOf('FloatingAction', module)
  .add('FloatingAction ', () => (
    <FloatingAction name={'Create'}>
      <Icon name={'Clear'} clr="red" act={action('clicked1')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'ExpandMore'} clr="blue" act={action('clicked3')} />
      <Icon name={'Done'} clr="purple" act={action('clicked4')} />
    </FloatingAction>
  ))
  .add('FloatingAction fixed', () => (
    <FloatingAction name={'Create'} fixed>
      <Icon name={'Clear'} clr="red" act={action('clicked1')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'Add'} clr="green" act={action('clicked2')} />
      <Icon name={'ExpandMore'} clr="blue" act={action('clicked3')} />
    </FloatingAction>
  ));
