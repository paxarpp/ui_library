import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeFloat } from './index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);

stories.add('Badge', () => (
  <Badge count={text('value')} color={text('color')} block={boolean('block', false)} badge={boolean('badge', false)} />
));
storiesOf('Badge/block', module)
  .add('Badge block 10', () => <Badge count={10} block />)
  .add('Badge block red 8', () => <Badge count={8} block color="red" />);
storiesOf('Badge/float', module)
  .add('BadgeFloat 9', () => <BadgeFloat count={9} />)
  .add('BadgeFloat blue pulse 16', () => <BadgeFloat count={16} pulse color="blue" />);
