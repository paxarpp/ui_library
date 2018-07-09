import React from 'react';
import { storiesOf } from '@storybook/react';
import { Carousel, CarouselSlider } from './index';

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
const Page1 = () => (
  <div style={{ background: 'red', height: '100%' }}>
    <h2>Header page1</h2>
    <p>Это ваша первая панель</p>
  </div>
);
const Page2 = () => (
  <div style={{ background: 'blue', height: '100%' }}>
    <h2>Header page2</h2>
    <p>Это ваша вторая панель</p>
  </div>
);
const Page3 = () => (
  <div style={{ background: 'green', height: '100%' }}>
    <h2>Header page3</h2>
    <p>Это ваша третья панель</p>
  </div>
);
const Page4 = () => (
  <div style={{ background: 'brown', height: '100%' }}>
    <h2>Header page4</h2>
    <p>Это ваша четвертая панель</p>
  </div>
);

storiesOf('Carousel', module)
  .add('Carousel', () => <Carousel images={data} />)
  .add('CarouselSlider', () => (
    <CarouselSlider>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </CarouselSlider>
  ))
  .add('Carousel reverse', () => <Carousel images={data} reverse />);
