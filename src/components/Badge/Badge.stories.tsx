import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeFloat } from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);

stories.add('Badge', () => <Badge count={text('value', null)} color={text('color', null)} block={boolean('block', false)} />);
storiesOf('Badge/badge', module).add('Badge', () => <Badge count={'text'} color={'green'} handler={action('click')} />);
storiesOf('Badge/block', module)
  .add('Badge block 10', () => <Badge count={10} block />)
  .add('Badge block red 8', () => <Badge count={8} block color="red" />);
storiesOf('Badge/float', module)
  .add('BadgeFloat 9', () => <BadgeFloat count={9} />)
  .add('BadgeFloat blue pulse 16', () => <BadgeFloat count={16} pulse color="blue" />);
