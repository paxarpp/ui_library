import React from 'react';
import styled from '@reshadow/styled';
import PropTypes from 'prop-types';

import { names } from '../names';
const dayOfWeek = setupDate => {
  const date = new Date(setupDate.year, setupDate.month, setupDate.day).getDay();
  return names.day[date === 0 ? 6 : date - 1];
};

const DatepickerDateDisplay = ({ setupDate }) => (
  <Wraper>
    <SpanY>{setupDate.year}</SpanY>
    <SpanD>
      {dayOfWeek(setupDate)}, {names.month[setupDate.month]} {setupDate.day}
    </SpanD>
  </Wraper>
);

DatepickerDateDisplay.propTypes = {
  setupDate: PropTypes.shape({ year: PropTypes.number, month: PropTypes.number, day: PropTypes.number })
};
const Wraper = styled.div`
  flex: 1 auto;
  background-color: #26a69a;
  color: #fff;
  padding: 20px 22px;
  font-weight: 500;
  @media only screen and (min-width: 601px) {
    flex: 0 1 270px;
  }
`;
const SpanY = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.7);
`;
const SpanD = styled.span`
  display: block;
  font-size: 2.8rem;
  line-height: 47px;
  font-weight: 500;
`;

export default DatepickerDateDisplay;
