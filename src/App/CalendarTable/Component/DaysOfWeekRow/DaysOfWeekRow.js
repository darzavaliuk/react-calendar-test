import {TH, TR} from "../../Style/Style";

const DayOfWeekRow = ({ daysOfWeek }) => {
    return (
        <TR>
            {daysOfWeek.map((day, index) => (
                <TH key={index}>{day}</TH>
            ))}
        </TR>
    );
};

export default DayOfWeekRow