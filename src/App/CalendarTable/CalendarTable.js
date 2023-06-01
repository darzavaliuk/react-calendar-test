import React, {useState} from 'react';
import {
    ButtonArrow,
    DeleteButton,
    SpanMonthTitle,
    Table,
    TableWrapper,
    TBody,
    TD,
    TDD,
    TH,
    THead,
    TR,
    TRHead
} from "./Style/Style";
import {format} from 'date-fns';
import DayOfWeekRow from "./Component/DaysOfWeekRow/DaysOfWeekRow";
import DateTableHeader from "./Component/DateTableHeader/DateTableHeader";
import WeekNavigation from "./Component/WeekNavigation/WeekNavigation";

function CalendarTable() {
    const dates = [];
    const [selectedItem, setSelectedItem] = useState('');
    const [active, setActive] = useState(false);
    const [selectedItemTarget, setSelectedItemTarget] = useState('');
    const [prevColor, setPrevColor] = useState('rgb(255, 255, 255)');
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const today = new Date();
    const firstDayOfWeek = new Date(currentWeek);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + 1);
    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    const monthYearString = `${dates[0].toLocaleString('en-GB', {month: 'long'})} ${dates[0].getFullYear()}`;
    const daysOfWeek = ['', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];

    function handleAddEvent(e, date, hour) {
        setActive(true)
        if (selectedItem && format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))
            console.log(format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))
        setPrevColor(e.target.style.backgroundColor);
        e.target.style.backgroundColor = '#b8b4fc'
        setSelectedItem(format(date, 'yyyy-MM-dd') + (hour < 10 ? ` 0${hour}` : ` ${hour}`))

        if (selectedItemTarget !== "" && e.target !== selectedItemTarget && prevColor === 'rgb(184, 180, 252)') {

        } else if (selectedItemTarget !== "") {
            selectedItemTarget.style.background = prevColor;

        }
        if (selectedItemTarget !== "" && e.target.style.backgroundColor === "rgb(255, 255, 255)" && selectedItemTarget.style.background === 'rgb(255, 255, 255)')
            setActive(false)

        setSelectedItemTarget(e.target)
    }

    function handleDeleteItem() {
        if (selectedItem !== '') {
            if (selectedItemTarget !== '') {
                selectedItemTarget.style.background = "rgb(255, 255, 255)"
                setPrevColor("rgb(255, 255, 255)");
                setSelectedItem('')
                setActive(false)
            }
            let data = JSON.parse(localStorage.getItem('storedData'));
            data = data.filter(el => selectedItem !== el.substring(0, 13))
            localStorage.setItem('storedData', JSON.stringify(data));
        }
    }

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

    return (
        <TableWrapper>
            <Table className="flex-table flex-table-aligned table table-striped table-hover">
                <THead>
                    <DayOfWeekRow daysOfWeek={daysOfWeek}/>
                    <DateTableHeader dates={dates}/>
                    <WeekNavigation
                        monthYearString={monthYearString}
                        handlePrevWeek={handlePrevWeek}
                        handleNextWeek={handleNextWeek}
                    />
                </THead>
                <TBody className="scroll" >
                    {[...Array(24)].map((_, hour) => (
                        <TR key={hour}>
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
            {active &&
                <DeleteButton onClick={handleDeleteItem}>Delete</DeleteButton>
            }
        </TableWrapper>
    );
}

export default CalendarTable;