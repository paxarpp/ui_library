import React from 'react';
import { storiesOf } from '@storybook/react';
import Datepicker from './index';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

storiesOf('Datepicker', module).add(
  'Datapicker ',
  withInfo({
    header: true,
    text: 'окно уже открыто, управление показом  реализуйте во внешнем коде',
    inline: true
  })(() => <Datepicker hadlerClose={action('close')} hanlerComplite={setupDate => action(setupDate)} />)
);
