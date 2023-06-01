import {TDD, TRHead} from "../../Style/Style";

const DateTableHeader = ({dates}) => {
    const today = new Date();

    return (
        <TRHead style={{textAlign: 'center'}}>
            <TDD></TDD>
            {dates.map((date) => (
                <TDD
                    key={date.toISOString()}
                    isToday={date.getDate() === today.getDate()}
                >
                    {date.getDate()}
                </TDD>
            ))}
        </TRHead>
    );
};

export default DateTableHeader;