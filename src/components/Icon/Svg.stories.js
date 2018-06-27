import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from './index';

storiesOf('SVG', module)
  .add('icon default', () => <Icon />)
  .add('icon Create color="green" Clicked', () => <Icon name="Create" onClick={action('clicked')} color={'green'} />)
  .add('icon Burn color="red" size="36"', () => <Icon name="Burn" color={'red'} size={36} />)
  .add('icon Error color="red" size="36"', () => <Icon name="Error" color={'red'} size={36} />)
  .add('icon Delete color="red" size="36"', () => (
    <Icon name="Delete" onClick={action('clicked')} color={'red'} size={36} />
  ))
  .add('icon ThumbDown color="red" size="36"', () => (
    <Icon name="ThumbDown" onClick={action('clicked')} color={'red'} size={36} />
  ))
  .add('icon ThumbUp color="blue" size="36"', () => (
    <Icon name="ThumbUp" onClick={action('clicked')} color={'blue'} size={36} />
  ))
  .add('icon Done color="green" size="36"', () => <Icon name="Done" color={'green'} size={36} />)
  .add('icon LeftArrow color="blue"', () => <Icon name="LeftArrow" onClick={action('clicked')} color={'blue'} />)
  .add('icon RightArrow color="black"', () => <Icon name="RightArrow" onClick={action('clicked')} color={'black'} />)
  .add('icon MountainRange color="pink" size="48"', () => <Icon name="MountainRange" color={'pink'} size={48} />)
  .add('icon Photo color="black" size="48"', () => <Icon name="Photo" color={'black'} size={48} />)
  .add('icon Routes color="red" size="48"', () => <Icon name="Routes" color={'red'} size={48} />)
  .add('icon Walk color="brown" size="36"', () => <Icon name="Walk" color={'brown'} size={36} />)
  .add('icon Clear color="black"', () => <Icon name="Clear" onClick={action('clicked')} color={'black'} />)
  .add('icon Add color="black"', () => <Icon name="Add" onClick={action('clicked')} color={'black'} />)
  .add('icon TransferWithin color="red" size="60"', () => <Icon name="TransferWithin" color={'red'} size={60} />)
  .add('icon Favorite color="red" size="36"', () => <Icon name="Favorite" color={'red'} size={36} />)
  .add('icon Menu color="black" size="36"', () => (
    <Icon name="Menu" onClick={action('clicked')} color={'black'} size={36} />
  ))
  .add('icon Star color="yellow" size="48"', () => <Icon name="Star" color={'yellow'} size={48} />)
  .add('icon UnfoldMore color="green" size="48"', () => <Icon name="UnfoldMore" color={'green'} size={48} />)
  .add('icon ExpandMore color="green" size="48"', () => <Icon name="ExpandMore" color={'green'} size={48} />)
  .add('icon ExpandLess color="green" size="48"', () => <Icon name="ExpandLess" color={'green'} size={48} />)
  .add('icon Arrow_Right color="green" size="48"', () => <Icon name="Arrow_Right" color={'green'} size={48} />)
  .add('icon Arrow_Left color="green" size="48"', () => <Icon name="Arrow_Left" color={'green'} size={48} />)
  .add('icon Arrow_Drop_Up color="green" size="48"', () => <Icon name="Arrow_Drop_Up" color={'green'} size={48} />)
  .add('icon Arrow_Drop_Down color="green" size="48"', () => <Icon name="Arrow_Drop_Down" color={'green'} size={48} />)
  .add('icon ManCycling color="yellow" size="48"', () => <Icon name="ManCycling" color={'yellow'} size={48} />);
