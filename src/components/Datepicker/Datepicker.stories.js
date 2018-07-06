import React from 'react';
import { storiesOf } from '@storybook/react';
import Datepicker from './index';
import { action } from '@storybook/addon-actions';

storiesOf('Datepicker', module).add('Datapicker ', () => (
  <Datepicker hadlerClose={action('close')} hanlerComplite={setupDate => action(setupDate)} />
));
