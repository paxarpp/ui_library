import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, BasicCard } from './index';

const text =
  'Я очень простая карточка. Я хорошо разбираюсь в небольших фрагментах информации. Мне удобно, потому что для эффективной работы требуется небольшая разметка. Я подобен тому, что называется панелью в других рамках.';
const text2 =
  'Я очень простая карточка. Я хорошо разбираюсь в небольших фрагментах информации. Мне удобно, потому что для эффективной работы требуется небольшая разметка.';
const header = 'Card Title';

storiesOf('Cards', module)
  .add('Card ', () => <Card>{text}</Card>)
  .add('Card bgColor=teal textColor=red', () => (
    <Card bgColor={'teal'} textColor={'red'}>
      {text}
    </Card>
  ))
  .add('BasicCard bgColor=grey textColor=white', () => (
    <BasicCard bgColor={'grey'} textColor={'white'} header={header}>
      {text2}
    </BasicCard>
  ));
