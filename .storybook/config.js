import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';

setDefaults({
  header: false,
  inline: true 
});
const ctx = require.context('../src/', true, /.stories.js$/);
addDecorator((story, context) => withInfo('описание')(story)(context));
const wrapper = story => <div style={{padding: 10}}>{story()}</div>;
addDecorator(wrapper);

function loadStories() {
    ctx.keys().forEach(filename => ctx(filename));
}

configure(loadStories, module);
