import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeFloat } from './index';

storiesOf('Badge', module)
  .add('Badge 4', () => <Badge count={4} />)
  .add('Badge block 10', () => <Badge count={10} block />)
  .add('Badge block red 8', () => <Badge count={8} block red />)
  .add('BadgeFloat 9', () => <BadgeFloat count={9} />)
  .add('BadgeFloat red 16', () => <BadgeFloat count={16} red />);
