import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './index';

const data = [
  {
    src: require('./assets/img1.jpg'),
    href: '#'
  },
  {
    src: require('./assets/img2.jpg'),
    href: '#'
  },
  {
    src: require('./assets/img3.jpg'),
    href: '#'
  },
  {
    src: require('./assets/img4.jpg'),
    href: '#'
  },
  {
    src: require('./assets/img2.jpg'),
    href: '#'
  }
];

storiesOf('Carousel', module)
  .add('Carousel', () => <Carousel images={data} />)
  .add('Carousel reverse', () => <Carousel images={data} reverse />);
