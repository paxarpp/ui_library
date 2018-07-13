import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SvgButton from './index';

storiesOf('SvgButton', module).add('SvgButton', () => <SvgButton handlerClick={action('click')}>button</SvgButton>);
