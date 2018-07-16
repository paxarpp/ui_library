import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import TextArea from './index';

const Wrapper = styled.div`
  font-family: 'Open Sans Condensed', arial, sans;
  width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`;

storiesOf('TextArea', module).add('TextArea ', () => (
  <Wrapper>
    <TextArea placeholder={'You message'} />
  </Wrapper>
));
