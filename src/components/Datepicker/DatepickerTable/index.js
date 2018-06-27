import React from 'react';
import styled from 'styled-components';

import Float from '../FloatDatepicker';

const getMaxDayinMonth = (year, month) => {
  return 33 - new Date(new Date(year, month).getFullYear(), new Date(year, month).getMonth(), 33).getDate();
};

const DatepickerTable = ({ year = 2018, month = 5 }) => {
  const maxDay = getMaxDayinMonth(year, month);
  const dayBegin = new Date(year, month, 1).getDay();
  const arr = [...Array(maxDay)].map((el, indx) => (
    <td>
      <Float>{indx + 1}</Float>
    </td>
  ));
  const nullArr = [...Array(dayBegin - 1)].fill(<td />);
  const result = nullArr.concat(arr);
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
      <tbody>
        <tr>{result.map((el, indx) => indx < 7 && el)}</tr>
        <tr>{result.map((el, indx) => indx >= 7 && indx < 14 && el)}</tr>
        <tr>{result.map((el, indx) => indx >= 14 && indx < 21 && el)}</tr>
        <tr>{result.map((el, indx) => indx >= 21 && indx < 28 && el)}</tr>
        <tr>{result.map((el, indx) => indx >= 28 && el)}</tr>
      </tbody>
    </Table>
  );
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
