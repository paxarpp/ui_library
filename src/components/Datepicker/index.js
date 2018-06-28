import React, { Component } from 'react';
import styled from 'styled-components';

import { Flat } from '../Button';
import Icon from '../Icon';
import DatepickerTable from './DatepickerTable';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth()
    };
  }

  render() {
    const { year, month } = this.state;
    return (
      <DatepickerModal>
        <ModalContent>
          <DatepickerDateDisplay>
            <SpanY>2019</SpanY>
            <SpanD>среда июнь 27</SpanD>
          </DatepickerDateDisplay>
          <DatepickerCalendarContainer>
            <DatepickerCalendar>
              <DatepickerControls>
                <Icon name="LeftArrow" />
                <SelectMonth />
                <SelectYear />
                <Icon name="RightArrow" />
              </DatepickerControls>
              <DatepickerTableWrappeer>
                <DatepickerTable year={year} month={month} />
              </DatepickerTableWrappeer>
              <DatepickerFooter>
                <Flat small danger>
                  Cancel
                </Flat>
                <Flat small>Ok</Flat>
              </DatepickerFooter>
            </DatepickerCalendar>
          </DatepickerCalendarContainer>
        </ModalContent>
      </DatepickerModal>
    );
  }
}
const DatepickerFooter = styled.div`
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

const DatepickerModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 0;
  width: 55%;
  margin: auto;
  overflow-y: auto;
  border-radius: 2px;
  will-change: top, opacity;
  max-width: 325px;
  min-width: 300px;
  max-height: none;
  z-index: 1003;
  display: block;
  opacity: 1;
  top: 10%;
  transform: scaleX(1) scaleY(1);
  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
    0 11px 15px -7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
    0 11px 15px -7px rgba(0, 0, 0, 0.2);
  :focus {
    outline: none;
  }
  @media only screen and (min-width: 601px) {
    max-width: 625px;
  }
`;
const ModalContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  @media only screen and (min-width: 601px) {
    flex-direction: row;
  }
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
`;
const DatepickerDateDisplay = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  background-color: #26a69a;
  color: #fff;
  padding: 20px 22px;
  font-weight: 500;
  @media only screen and (min-width: 601px) {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 270px;
    -ms-flex: 0 1 270px;
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
const DatepickerCalendarContainer = styled.div`
  -webkit-box-flex: 2.5;
  -webkit-flex: 2.5 auto;
  -ms-flex: 2.5 auto;
  flex: 2.5 auto;
`;
const DatepickerCalendar = styled.div``;
const SelectMonth = styled.div``;
const SelectYear = styled.div``;
const DatepickerTableWrappeer = styled.div``;

const DatepickerControls = styled.div`
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

export default DatePicker;
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

// /* Calendar */

// .datepicker-table {
//   width: 280px;
//   font-size: 1rem;
//   margin: 0 auto;
// }

// .datepicker-table thead {
//   border-bottom: none;
// }

// .datepicker-table th {
//   padding: 10px 5px;
//   text-align: center;
// }

// .datepicker-table tr {
//   border: none;
// }

// .datepicker-table abbr {
//   text-decoration: none;
//   color: #999;
// }

// .datepicker-table td {
//   border-radius: 50%;
//   padding: 0;
// }

// .datepicker-table td.is-today {
//   color: #26a69a;
// }

// .datepicker-table td.is-selected {
//   background-color: #26a69a;
//   color: #fff;
// }

// .datepicker-table td.is-outside-current-month, .datepicker-table td.is-disabled {
//   color: rgba(0, 0, 0, 0.3);
//   pointer-events: none;
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

// .datepicker-clear {
//   color: #F44336;
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
