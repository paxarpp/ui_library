import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index';

const data = [
  {
    src: require('./assets/img1.jpg'),
    caption: '111111  1111111111  This is our big Tagline!',
    text: 'Heres our small slogan Heres our small slogan'
  },
  {
    src: require('./assets/img2.jpg'),
    caption: '22222 22222 22222222 This is our big Tagline!',
    text: 'Heres our small slogan Heres our small slogan Heres our small slogan'
  },
  {
    src: require('./assets/img3.jpg'),
    caption: '3333 33333 33333333 This is our big Tagline!',
    text: 'Heres our small  our small slogan'
  },
  {
    src: require('./assets/img4.jpg'),
    caption: '444 444444 44444 44 This is our big Tagline!',
    text: 'Heres our Heres our small slogan'
  }
];

storiesOf('Slider', module)
  .add('Slider', () => <Slider images={data} />)
  .add('Slider duration=3000 horisontal width=400px height=300px', () => (
    <Slider images={data} horisontal duration="3000" width="400px" height="300px" />
  ));
