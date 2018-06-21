import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Burn,
  LeftArrow,
  RightArrow,
  ManCycling,
  MountainRange,
  Photo,
  Routes,
  Walk,
  Clear,
  TransferWithin,
  Add,
  ThumbDown,
  ThumbUp,
  Done,
  Favorite,
  Menu,
  Star
} from './index';

storiesOf('SVG', module)
  .add('icon Burn color="red" size="36"', () => <Burn color={'red'} size={36} />)
  .add('icon ThumbDown color="red" size="36"', () => <ThumbDown color={'red'} size={36} />)
  .add('icon ThumbUp color="blue" size="36"', () => <ThumbUp color={'blue'} size={36} />)
  .add('icon Done color="green" size="36"', () => <Done color={'green'} size={36} />)
  .add('icon LeftArrow color="blue" size="24"', () => <LeftArrow color={'blue'} size={24} />)
  .add('icon RightArrow color="black" size="24"', () => <RightArrow color={'black'} size={24} />)
  .add('icon MountainRange color="pink" size="48"', () => <MountainRange color={'pink'} size={48} />)
  .add('icon Photo color="black" size="48"', () => <Photo color={'black'} size={48} />)
  .add('icon Routes color="red" size="48"', () => <Routes color={'red'} size={48} />)
  .add('icon Walk color="brown" size="36"', () => <Walk color={'brown'} size={36} />)
  .add('icon Clear color="black" size="24"', () => <Clear color={'black'} size={24} />)
  .add('icon Add color="black" size="24"', () => <Add color={'black'} size={24} />)
  .add('icon TransferWithin color="red" size="60"', () => <TransferWithin color={'red'} size={60} />)
  .add('icon Favorite color="red" size="36"', () => <Favorite color={'red'} size={36} />)
  .add('icon Menu color="black" size="36"', () => <Menu color={'black'} size={36} />)
  .add('icon Star color="yellow" size="48"', () => <Star color={'yellow'} size={48} />)
  .add('icon ManCycling color="yellow" size="36"', () => <ManCycling color={'yellow'} size={36} />);
