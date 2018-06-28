import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../../Icon';

const DatepickerControls = ({ decrimentMonth, incrementMonth }) => (
  <WrapDatepickerControls>
    <Icon name="LeftArrow" onClick={decrimentMonth} />
    <SelectMonth />
    <SelectYear />
    <Icon name="RightArrow" onClick={incrementMonth} />
  </WrapDatepickerControls>
);
DatepickerControls.propTypes = {
  decrimentMonth: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired
};
const SelectMonth = styled.div``;
const SelectYear = styled.div``;

const WrapDatepickerControls = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 280px;
  margin: 0 auto;
`;

export default DatepickerControls;
// .datepicker-controls .selects-container {
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
// }

// .datepicker-controls .select-wrapper input {
//   border-bottom: none;
//   text-align: center;
//   margin: 0;
// }

// .datepicker-controls .select-wrapper input:focus {
//   border-bottom: none;
// }

// .datepicker-controls .select-wrapper .caret {
//   display: none;
// }

// .datepicker-controls .select-year input {
//   width: 50px;
// }

// .datepicker-controls .select-month input {
//   width: 70px;
// }

// .month-prev, .month-next {
//   margin-top: 4px;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
// }

// .datepicker-day-button {
//   background-color: transparent;
//   border: none;
//   line-height: 38px;
//   display: block;
//   width: 100%;
//   border-radius: 50%;
//   padding: 0 5px;
//   cursor: pointer;
//   color: inherit;
// }

// .datepicker-day-button:focus {
//   background-color: rgba(43, 161, 150, 0.25);
// }

// .datepicker-cancel,
// .datepicker-clear,
// .datepicker-today,
// .datepicker-done {
//   color: #26a69a;
//   padding: 0 1rem;
// }

// /* Media Queries */
// @media only screen and (min-width: 601px) {

//   .datepicker-container.modal-content {
//     -webkit-box-orient: horizontal;
//     -webkit-box-direction: normal;
//     -webkit-flex-direction: row;
//         -ms-flex-direction: row;
//             flex-direction: row;
//   }
//   .datepicker-date-display {
//     -webkit-box-flex: 0;
//     -webkit-flex: 0 1 270px;
//         -ms-flex: 0 1 270px;
//             flex: 0 1 270px;
//   }
//   .datepicker-controls,
//   .datepicker-table,
//   .datepicker-footer {
//     width: 320px;
//   }
//   .datepicker-day-button {
//     line-height: 44px;
//   }
// }
