import React, {useState} from 'react';
import styled from 'styled-components';
import {ButtonArrow, DeleteButton, SpanMonthTitle, Table, TableWrapper, TBody, TD, TDD, TH, THead, TR} from "./Style";
import {format} from 'date-fns';

function CalendarTable() {
    const dates = [];
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedItemTarget, setSelectedItemTarget] = useState('');

    function handleAddEvent(e, date, hour) {
        e.preventDefault();
        if (selectedItem && format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))
            console.log(format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))
        console.log(e.target)
        e.target.style.backgroundColor = '#b8b4fc'
        e.preventDefault();
        setSelectedItem(format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))
        if (selectedItemTarget !== "")
            selectedItemTarget.style.background = 'white'
        setSelectedItemTarget(e.target)
        if (selectedItem) {
            e.preventDefault();
        }
    }

    function handleDeleteItem() {

        if (selectedItem !== '') {
            if (selectedItemTarget !== '')
                selectedItemTarget.style.background = "white"
            let data = JSON.parse(localStorage.getItem('storedData'));
            data = data.filter(el => selectedItem !== el.substring(0, 13))
            localStorage.setItem('storedData', JSON.stringify(data));
        }
        // tableRef.current.forceUpdate();
    }

    const [currentWeek, setCurrentWeek] = useState(new Date());

    function handlePrevWeek() {
        const prevWeek = new Date(currentWeek);
        prevWeek.setDate(prevWeek.getDate() - 7);
        setCurrentWeek(prevWeek);
    }

    function handleNextWeek() {
        const nextWeek = new Date(currentWeek);
        nextWeek.setDate(nextWeek.getDate() + 7);
        setCurrentWeek(nextWeek);
    }

    const firstDayOfWeek = new Date(currentWeek);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());
    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    const today = new Date(); // текущая дата
    const monthYearString = `${dates[0].toLocaleString('en-GB', {month: 'long'})} ${dates[0].getFullYear()}`;

    return (
        <TableWrapper onClick={(e) => e.preventDefault()}>
            <Table className="flex-table flex-table-aligned table table-striped table-hover">
                <THead>
                    <TR>
                        <TH></TH>
                        <TH>S</TH>
                        <TH>M</TH>
                        <TH>T</TH>
                        <TH>W</TH>
                        <TH>T</TH>
                        <TH>F</TH>
                        <TH>S</TH>
                    </TR>
                    <TR style={{textAlign: "center"}}>
                        <TD></TD>
                        {dates.map((date) => (
                            <TDD
                                key={date.toISOString()}
                                isToday={date.getDate() === today.getDate()}
                            >
                                {date.getDate()}
                            </TDD>
                        ))}
                    </TR>
                    <TR style={{textAlign: "center"}}>
                        <TD></TD>
                        <TD>
                            <ButtonArrow onClick={handlePrevWeek}>{"<"}</ButtonArrow>
                        </TD>
                        <TD></TD>
                        <TD></TD>
                        <TD>
                            <SpanMonthTitle>{monthYearString}</SpanMonthTitle>
                        </TD>
                        <TD></TD>
                        <TD></TD>
                        <TD>
                            <ButtonArrow onClick={handleNextWeek}>{">"}</ButtonArrow>
                        </TD>
                    </TR>
                </THead>
                <TBody className="scroll" onClick={(e) => e.preventDefault()}>
                    {[...Array(24)].map((_, hour) => (
                        <TR key={hour} onClick={(e) => e.preventDefault()}>
                            <TD>
                                <span style={{color: "#bcbcbc"}}>{`${hour}:00`}</span>
                            </TD>
                            {dates.map((date) => (
                                <TD
                                    key={`${date.toISOString()}-${hour}`}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            boxShadow:
                                                "inset 0 0 0 1px #e8e8e8, inset 0 0 0 2px white",
                                            background:
                                                JSON.parse(localStorage.getItem("storedData")) &&
                                                JSON.parse(localStorage.getItem("storedData")).some(
                                                    (el) =>
                                                        el.substring(0, 13) ===
                                                        format(date, "yyyy-MM-dd") +
                                                        (hour < 10 ? ` 0${hour}` : ` ${hour}`)
                                                )
                                                    ? "#ebecff"
                                                    : "#ffffff",
                                        }}
                                        onClick={(e) => handleAddEvent(e, date, hour)}
                                    ></div>
                                </TD>
                            ))}
                        </TR>
                    ))}
                </TBody>
            </Table>
            {selectedItem &&
                <DeleteButton onClick={handleDeleteItem}>Delete</DeleteButton>
            }
        </TableWrapper>
    );
}

export default CalendarTable;