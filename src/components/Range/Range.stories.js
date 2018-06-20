import React from 'react';
import { storiesOf } from '@storybook/react';
import Range from './index';

storiesOf('Range', module).add('Range ', () => <Range min={0} max={100} />);
