import React, { Component } from 'react';
import styled from 'styled-components';

import DatepickerTable from './DatepickerTable';
import DatepickerControls from './DatepickerControls';
import DatepickerDateDisplay from './DatepickerDateDisplay';
import DatepickerFooter from './DatepickerFooter';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      setupDate: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
    };
  }
  decrimentMonth = () => {
    const { year, month } = this.state;
    this.setState({
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year
    });
  };
  incrementMonth = () => {
    const { year, month } = this.state;
    this.setState({
      month: month === 11 ? 1 : month + 1,
      year: month === 11 ? year + 1 : year
    });
  };
  dateChoise = e => () => {
    this.setState(prev => ({
      ...prev,
      setupDate: `${prev.year}-${prev.month}-${e}`
    }));
  };
  render() {
    const { year, month, setupDate } = this.state;
    return (
      <DatepickerModal>
        <ModalContent>
          <DatepickerDateDisplay setupDate={setupDate} />
          <DatepickerCalendarContainer>
            <DatepickerCalendar>
              <DatepickerControls
                {...this.state}
                decrimentMonth={this.decrimentMonth}
                incrementMonth={this.incrementMonth}
              />
              <DatepickerTableWrappeer>
                <DatepickerTable year={year} month={month} handlerClick={this.dateChoise} />
              </DatepickerTableWrappeer>
              <DatepickerFooter />
            </DatepickerCalendar>
          </DatepickerCalendarContainer>
        </ModalContent>
      </DatepickerModal>
    );
  }
}

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
const DatepickerCalendarContainer = styled.div`
  -webkit-box-flex: 2.5;
  -webkit-flex: 2.5 auto;
  -ms-flex: 2.5 auto;
  flex: 2.5 auto;
`;
const DatepickerCalendar = styled.div``;
const DatepickerTableWrappeer = styled.div``;

export default DatePicker;

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
