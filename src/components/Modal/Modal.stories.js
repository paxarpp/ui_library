import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './index';

const modal = {
  header: 'заголовок модального окна',
  content: 'содержание сообщения, различной длинны и наполненности'
};

storiesOf('Modal', module).add('Modal ', () => <Modal handlerClick={action('clicked')} isOpen modal={modal} />);
