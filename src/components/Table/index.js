import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Table = ({ data, ...props }) => (
  <TableWrap>
    <Thead {...props}>
      <Tr>
        {Object.keys(data[0]).map((fieldName, indx) => (
          <Th key={`${fieldName}-${indx}`} {...props}>
            {fieldName}
          </Th>
        ))}
      </Tr>
    </Thead>
    <Tbody {...props}>
      {data.map((elem, indexTr) => (
        <Tr key={indexTr}>
          {Object.values(elem).map((cell, indx) => (
            <Td key={`${indexTr}-${indx}`}>{cell}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </TableWrap>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  striped: PropTypes.bool,
  centered: PropTypes.bool,
  highlight: PropTypes.bool,
  sticked: PropTypes.bool
};

const isSticked = ({ sticked }) =>
  sticked &&
  css`
    position: sticky;
    top: 0;
    background: white;
  `;
const TableWrap = styled.table`
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
`;
const Tr = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
const tdth = css`
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
`;
const Th = styled.th`
  ${tdth};
  border: none;
  ${isSticked};
`;
const Td = styled.td`
  ${tdth};
  border: none;
`;
const Tbody = styled.tbody`
  & > tr:nth-child(odd) {
    background-color: ${props => props.striped && 'rgba(242, 242, 242, 0.5)'};
  }
  & > tr > td {
    border-radius: ${props => props.striped && '0'};
  }
  & > tr {
    transition: ${props => props.highlight && 'background-color 0.25s ease'};
  }
  & > tr:hover {
    background-color: ${props => props.highlight && 'rgba(242, 242, 242, 0.5)'};
  }
  ${props => props.centered && 'tr td {text-align: center;}'};
`;
const Thead = styled.thead`
  ${props => props.centered && 'tr th {text-align: center;}'};
`;
export default Table;
