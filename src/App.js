import {useEffect, useState} from 'react';
import Popup from './Popup';
import {format} from 'date-fns';
import styled, {css} from 'styled-components'
import CalendarTable from "./CalendarTable";

function Calendar() {

    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [newEventDate, setNewEventDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState('');

    const TableWrapper = styled.div`
      height: 80vh;
    `;

    const Table = styled.table`
      padding: 5px;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-collapse: separate;
      border-spacing: 5px;
    `;

    const THead = styled.thead`
      padding: 2px 0;
      display: block;
      background: #f8f4f4;
      //background: blue;
    `;

    const TBody = styled.tbody`
      overflow-y: scroll;
      flex: 1;
      display: block;
    `;

    const IPhoneButton = styled.button`
      border: none;
      color: #0066cc;
      font-size: 17px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      text-align: center;
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        //background-color: #0066cc;
        cursor: pointer;
      }

      &:active {
        background-color: #0052b3;
        box-shadow: none;
      }
    `;

    const TR = styled.tr`
      width: 100%;
      display: flex;
    `;

    const TD = styled.td`
      display: block;
      flex: 1;

    `;

    const TDD = styled.td`
      display: block;
      flex: 1;
        // ${({isRound}) => isRound && 'border-radius: 50%;'}
      border-radius: ${({isToday}) => isToday ? '50%' : '0%'};
      background: ${({isToday}) => isToday ? 'red' : '#f8f4f4'};
      color: ${({isToday}) => isToday ? 'white' : 'black'};

    `;

    const TH = styled.th`
      display: block;
      flex: 1;
      //border: 1px solid black;
    `;

    const FlexWidthsTD = styled(TD)`
      flex: 3;
    `;

    const FlexWidthsTH = styled(TH)`
      flex: 2;
    `;

    const TableScroll = styled(Table)`
      ${TableWrapper} & {
        overflow-y: auto;
      }

      ${Table}.flex-table-aligned ${THead} > ${TR} {
        overflow-y: scroll;
        //overflow-x: hidden;
      }

      ${Table}.flex-widths ${FlexWidthsTD}, ${Table}.flex-widths ${FlexWidthsTH} {
        flex: 2;
      }
    `;
    const Calendar = styled.div`
      max-width: 740px;
      margin: auto;
    `
    const CalendarTitle = styled.h2`
      font-size: 24px;
      font-family: Almarai, serif;
      font-weight: 300;
      margin: auto 0;
    `
    const ButtonArrow = styled.button`
      background: #f8f4f4;

      color: red;
      border: none;
      font-size: 18px;

      &:hover {
        cursor: pointer;
      }
    `
    const CalendarHeader = styled.div`
      display: flex;
      justify-content: space-between;
      text-align: center;
      align-content: center;
      height: 60px;
      background: white;
      padding: 15px;
    `

    const AddEventButton = styled.button`
      background: white;
      color: red;
      border: none;
      font-size: 34px;

      &:hover {
        cursor: pointer;
      }`

    const TableHeader = styled.thead`
      font-size: 10px;

      font-family: Roboto;
      font-weight: 400;

    `

    const SpanMonthTitle = styled.span`
      font-family: Telex;
      font-size: 14px`

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function handleAddEventClick() {
        setShowAddEventModal(true);
    }

    function handleCloseAddEventModal() {
        setShowAddEventModal(false);
    }

    function handleNewEventDateChange(event) {
        console.log(event.target.value)
        setNewEventDate(event.target.value);
    }

    function handleAddEventNew() {
        console.log(`Добавлено новое событие на дату: ${newEventDate}`);
        handleCloseAddEventModal();
    }

    function handleDateTimeChange(event) {
        const inputEl = document.querySelector('input[type="datetime"]');
        const input = inputEl.value;
        console.log(inputEl.value)
        setSelectedDateTime(input);
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        storedData.push(input);
        // console.log(selectedDateTime)
        localStorage.setItem('storedData', JSON.stringify(storedData));
    }

    const DeleteButton = styled.button`
      background-color: #dc3545;
      border: none;
      color: white;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 16px;
      border-radius: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      text-align: center;
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #c82333;
      }

      &:active {
        background-color: #bd2130;
        box-shadow: none;
      }
    `;

    return (
        <Calendar>
            <CalendarHeader>
                <CalendarTitle>Interview Calendar</CalendarTitle>
                <AddEventButton
                    value="+"
                    onClick={togglePopup}>+
                </AddEventButton>
            </CalendarHeader>
            {isOpen && <Popup
                content={<div style={{textAlign: "center"}}>
                    <b>https://calendar.com</b>
                    <p>Enter event time:</p>
                    <p>YYYY-MM-DD HH:mm:ss</p>
                    <input type="datetime"/><br></br>
                    <IPhoneButton onClick={togglePopup}>Cancel</IPhoneButton>
                    <IPhoneButton onClick={handleDateTimeChange}>Ok</IPhoneButton>

                </div>}
                handleClose={togglePopup}
            />}

            <CalendarTable/>
        </Calendar>
    );


}

export default Calendar;