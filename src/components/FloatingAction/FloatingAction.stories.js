import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingAction from './index';
import Icon from '../Icon';

storiesOf('FloatingAction', module).add('FloatingAction ', () => (
  <FloatingAction name={'Create'}>
    <Icon name={'Clear'} clr="red" />
    <Icon name={'Add'} clr="green" />
    <Icon name={'ExpandMore'} clr="blue" />
    <Icon name={'Done'} clr="purple" />
  </FloatingAction>
));
