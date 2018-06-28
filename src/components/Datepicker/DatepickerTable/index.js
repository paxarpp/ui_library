import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Float from '../FloatDatepicker';

const getMaxDayinMonth = (year, month) => {
  return 33 - new Date(new Date(year, month).getFullYear(), new Date(year, month).getMonth(), 33).getDate();
};

const prepareArrayDay = (year, month, handlerClick) => {
  const dayBegin = new Date(year, month, 1).getDay();
  const arr = [...Array(getMaxDayinMonth(year, month))].map((el, indx) => (
    <td key={indx}>
      <Float handlerClick={handlerClick}>{indx + 1}</Float>
    </td>
  ));
  const arrTemp = [...Array(dayBegin - 1)].fill(<td />).concat(arr);
  const result = [];
  for (let i = 0; i < arrTemp.length; i += 7) {
    result.push(arrTemp.slice(i, i + 7));
  }
  return result;
};

const DatepickerTable = ({ year = new Date().getFullYear(), month = new Date().getMonth(), handlerClick }) => {
  const result = prepareArrayDay(year, month, handlerClick);
  return (
    <Table>
      <thead>
        <tr>
          <th>Пн</th>
          <th>Вт</th>
          <th>Ср</th>
          <th>Чт</th>
          <th>Пт</th>
          <th>Сб</th>
          <th>Вс</th>
        </tr>
      </thead>
      <tbody>{result.map((el, indx) => <tr key={indx}>{[...el]}</tr>)}</tbody>
    </Table>
  );
};
DatepickerTable.propTypes = {
  handlerClick: PropTypes.func,
  year: PropTypes.number,
  month: PropTypes.number
};
const Table = styled.table`
  width: 280px;
  font-size: 1rem;
  margin: 0 auto;
  & > thead {
    border-bottom: none;
    color: #999;
  }
  th {
    padding: 10px 5px;
    text-align: center;
  }
  tr {
    border: none;
  }
`;

export default DatepickerTable;
