import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureDiscovery from './index';

storiesOf('FeatureDiscovery', module).add('FeatureDiscovery ', () => (
  <FeatureDiscovery header="новинки">
    <span>всякая особая замануха , пишем здесь !!!</span>
  </FeatureDiscovery>
));
