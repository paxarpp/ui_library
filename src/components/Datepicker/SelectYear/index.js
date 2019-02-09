import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toggleOpen } from '../../helpers';

const YEAR_LINE = 21;
const YEAR_LINE_HALF = (YEAR_LINE - 1) / 2;

const SelectYear = ({ year, handlerYear }) => {
  const [open, toggler] = useState(false);

  const openSelectYear = (select, action) => () => {
    action();
    handlerYear(select);
  };

  return (
    <Wrapper>
      <Div onClick={toggleOpen(toggler, open)}>{year}</Div>
      {open && (
        <Selected>
          <Ul>
            {[...Array(YEAR_LINE)].map((_, indx) => (
              <Li key={indx} onClick={openSelectYear(year - YEAR_LINE_HALF + indx, toggleOpen(toggler, open))}>
                {year - YEAR_LINE_HALF + indx}
              </Li>
            ))}
          </Ul>
        </Selected>
      )}
    </Wrapper>
  );
};

SelectYear.propTypes = {
  year: PropTypes.number.isRequired,
  handlerYear: PropTypes.func.isRequired
};
const Div = styled.div`
  margin-top: 4px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Selected = styled.div`
  overflow-y: auto;
  position: absolute;
  top: -50px;
  left: 10px;
  background-color: white;
  z-index: 999;
  font-size: 1.2rem;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
    0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;
const Ul = styled.ul`
  cursor: pointer;
  list-style-type: none;
  padding: 0;
`;
const Li = styled.li`
  padding: 5px 10px;
  border-radius: 2px;
  transition: background-color 0.3s linear;
  :hover {
    background-color: #69b2ab;
  }
`;
export default SelectYear;
