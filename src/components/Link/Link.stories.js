import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Link', module)
  .add('Link', () => <Link url={'./'}>ссылка</Link>)
  .add('Link left color="red"', () => (
    <Link left url={'./'} color="red">
      ссылка
    </Link>
  ))
  .add('Link right lowercase', () => (
    <Link right lowercase url={'./'}>
      ссылка
    </Link>
  ))
  .add('Link center color="#aeeeee"', () => (
    <Link center url={'./'} color="#aeeeee">
      ссылка
    </Link>
  ));
