import {useState} from 'react';
import Popup from './Popup/Popup';
import CalendarTable from "./CalendarTable/CalendarTable";
import {AddEventButton, ButtonArea, Calendar, CalendarHeader, CalendarTitle, Input, SuggestButton} from "./Style/AppStyle";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function handleDateTimeChange(event) {
        const inputEl = document.querySelector('input[type="datetime"]');
        const input = inputEl.value;
        // console.log(inputEl.value)
        setSelectedDateTime(input);
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        storedData.push(input);
        localStorage.setItem('storedData', JSON.stringify(storedData));
    }

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
                    <Input
                        type="datetime"/>
                    <ButtonArea style={{display: "flex", justifyContent: "center", borderTop: "1px solid #999999"}}>
                        <SuggestButton onClick={togglePopup}>Cancel</SuggestButton>
                        <SuggestButton onClick={handleDateTimeChange}>Ok</SuggestButton>
                    </ButtonArea>
                </div>}
                handleClose={togglePopup}
            />}
            <CalendarTable/>
        </Calendar>
    );


}

export default App;