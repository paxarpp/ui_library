import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import SelectMonth from '../SelectMonth';

const SelectYear = ({ year }) => <Div>{year}</Div>;

const DatepickerControls = ({ year, month, decrimentMonth, incrementMonth, handlerMonth }) => (
  <Wrap>
    <Icon name="LeftArrow" onClick={decrimentMonth} />
    <SelectMonth month={month} handlerMonth={handlerMonth} />
    <SelectYear year={year} />
    <Icon name="RightArrow" onClick={incrementMonth} />
  </Wrap>
);
DatepickerControls.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  decrimentMonth: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  handlerMonth: PropTypes.func.isRequired
};
const Div = styled.div`
  margin-top: 4px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Wrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 280px;
  margin: 2px auto;
`;

export default DatepickerControls;
