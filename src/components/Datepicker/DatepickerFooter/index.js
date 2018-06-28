import React from 'react';
import styled from 'styled-components';

import { Flat } from '../../Button';

const DatepickerFooter = () => (
  <Wrapper>
    <Flat small danger>
      Cancel
    </Flat>
    <Flat small>Ok</Flat>
  </Wrapper>
);
const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  padding-bottom: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export default DatepickerFooter;
