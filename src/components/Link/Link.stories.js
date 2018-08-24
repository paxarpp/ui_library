import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Link', module)
  .add('Link left', () => (
    <Link left url={'./'}>
      ссылка
    </Link>
  ))
  .add('Link right', () => (
    <Link right url={'./'}>
      ссылка
    </Link>
  ))
  .add('Link center', () => (
    <Link center url={'./'}>
      ссылка
    </Link>
  ));
