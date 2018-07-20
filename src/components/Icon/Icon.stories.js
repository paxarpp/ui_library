import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Icon } from './index';

storiesOf('Icon', module)
  .add('remove icon', () => <Icon name="remove" />)
  .add('place icon', () => <Icon name="place" />)
  .add('layers icon', () => <Icon name="layers" />)
  .add('unfoldMore icon', () => <Icon name="unfoldMore" />)
  .add('expandMore icon', () => <Icon name="expandMore" />)
  .add('expandLess icon', () => <Icon name="expandLess" />)
  .add('arrow_Right icon', () => <Icon name="arrow_Right" />)
  .add('arrow_Left icon', () => <Icon name="arrow_Left" />)
  .add('arrow_Drop_down icon', () => <Icon name="arrow_Drop_down" />)
  .add('arrow_Drop_Up', () => <Icon name="arrow_Drop_Up" />)
  .add('facebook icon', () => <Icon name="facebook" />)
  .add('google icon', () => <Icon name="google" />)
  .add('vk icon', () => <Icon name="vk" />)
  .add('pointRed icon', () => <Icon name="pointRed" />)
  .add('pointBrown icon', () => <Icon name="pointBrown" />)
  .add('add icon', () => <Icon name="add" />)
  .add('create icon color=green size=3rem', () => <Icon name="create" color="green" size="3rem" />)
  .add('star icon', () => <Icon name="star" />)
  .add('delete icon colorHover=red', () => <Icon name="delete" colorHover="red" />)
  .add('error icon color=red', () => <Icon name="error" color="red" />)
  .add('thumbDown icon color=red', () => <Icon name="thumbDown" color="red" />)
  .add('thumbUp icon color=blue', () => <Icon name="thumbUp" color="blue" />)
  .add('transferWithin icon color=blue', () => <Icon name="transferWithin" color="blue" />)
  .add('clear icon color=red', () => <Icon name="clear" color="red" />)
  .add('lobby icon', () => <Icon name="lobby" />)
  .add('photo icon', () => <Icon name="photo" />)
  .add('leftArrow icon disable', () => <Icon name="leftArrow" disable />)
  .add('rightArrow icon', () => <Icon name="rightArrow" />)
  .add('burn icon color=red', () => <Icon name="burn" color="red" />)
  .add('favorite icon color=purple', () => <Icon name="favorite" color="purple" />)
  .add('mountainRange icon color=red', () => <Icon name="mountainRange" color="red" />)
  .add('walk icon color=red', () => <Icon name="walk" color="red" />)
  .add('done icon color=green', () => <Icon name="done" color="green" />)
  .add('manCycling icon with size=2rem', () => <Icon name="manCycling" size="2rem" />)
  .add('routes icon with size=3rem', () => <Icon name="routes" size="3rem" />)
  .add('menu icon with onClick handler size=3rem color=blue colorHover=green', () => (
    <Icon size="2rem" color="blue" colorHover="green" name="menu" onClick={action('Icon click')} />
  ))
  .add('menuRound icon with onClick handler size=3rem color=blue colorHover=green', () => (
    <Icon size="2rem" color="blue" colorHover="green" name="menuRound" onClick={action('Icon click')} />
  ));
