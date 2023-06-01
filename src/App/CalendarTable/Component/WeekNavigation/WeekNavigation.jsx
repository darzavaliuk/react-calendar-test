import {ButtonArrow, SpanMonthTitle, TD, TR} from "../../Style/Style";

const WeekNavigation = ({ monthYearString, handlePrevWeek, handleNextWeek }) => {
    return (
        <TR style={{ textAlign: 'center' }}>
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
    );
};

export default WeekNavigation;