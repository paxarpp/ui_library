import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureDiscovery from './index';

storiesOf('FeatureDiscovery', module).add('FeatureDiscovery ', () => (
  <FeatureDiscovery open header="новинки">
    всякая особая замануха , пишем сдесь !!!
  </FeatureDiscovery>
));
