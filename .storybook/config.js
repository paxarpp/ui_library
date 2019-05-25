import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src/components', true, /\.stories\.tsx$/);

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(storyFn => <div style={{ textAlign: 'center', marginRight: '90px' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
