import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const ctx = require.context('../src/', true, /.stories.js$/);
addDecorator(withInfo({
  header: false,
  inline: true
}));

const wrapper = story => <div style={{padding: 10}}>{story()}</div>;
addDecorator(wrapper);

function loadStories() {
    ctx.keys().forEach(filename => ctx(filename));
}

configure(loadStories, module);
