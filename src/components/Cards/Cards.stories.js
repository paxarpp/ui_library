import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, BasicCard, ImageCard, CardReveal } from './index';
import { withInfo } from '@storybook/addon-info';

const text =
  'Я очень простая карточка. Я хорошо разбираюсь в небольших фрагментах информации. Мне удобно, потому что для эффективной работы требуется небольшая разметка. Я подобен тому, что называется панелью в других рамках.';
const text2 =
  'Я очень простая карточка. Я хорошо разбираюсь в небольших фрагментах информации. Мне удобно, потому что для эффективной работы требуется небольшая разметка.';
const text3 = 'Я двухсторонняя карточка  на 2 стороне поместиться достаточно информации.';
const header = 'Card Title';
const url = 'https://materializecss.com/images/sample-1.jpg';

storiesOf('Cards', module)
  .add(
    'Card ',
    withInfo({
      header: false,
      inline: true
    })(() => <Card>{text}</Card>)
  )
  .add(
    'Card bgColor=teal textColor=red',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <Card bgColor={'teal'} textColor={'red'}>
        {text}
      </Card>
    ))
  )
  .add(
    'BasicCard bgColor=grey textColor=white',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <BasicCard bgColor={'grey'} textColor={'white'} header={header}>
        {text2}
      </BasicCard>
    ))
  )
  .add(
    'ImageCard bgColor=#FFF textColor=#000',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <ImageCard bgColor={'#FFF'} textColor={'#000'} header={header} url={url}>
        {text2}
      </ImageCard>
    ))
  )
  .add(
    'CardReveal bgColor=#FFF textColor=#000',
    withInfo({
      header: false,
      inline: true
    })(() => (
      <CardReveal bgColor={'#FFF'} textColor={'#000'} header={header} url={url}>
        {text3}
      </CardReveal>
    ))
  );
