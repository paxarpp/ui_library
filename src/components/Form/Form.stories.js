import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Style1, Style2, Materialize } from './index';

const field = [
  {
    name: 'input',
    type: 'text',
    placeholder: 'Full Name',
    regexp: /^[а-яА-Я]{1,20} [а-яА-Я]{1,20}$/,
    field_name: 'full_Name'
  },
  {
    name: 'input',
    type: 'email',
    placeholder: 'Email',
    regexp: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    field_name: 'email'
  },
  {
    name: 'url',
    type: 'Website',
    placeholder: 'Website',
    regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    field_name: 'url'
  },
  {
    name: 'textArea',
    type: 'message',
    placeholder: 'Message',
    field_name: 'message'
  }
];

storiesOf('Form', module)
  .add('Materialize ', () => <Materialize formValue={value => action(value)(value)} field={field} />)
  .add('Style1 ', () => <Style1 />)
  .add('Style2 ', () => <Style2 />);
