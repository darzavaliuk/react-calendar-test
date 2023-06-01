import styled from "styled-components";
import {format} from "date-fns";

export const DeleteButton = styled.button`
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

export const TableWrapper = styled.div`
  height: 80vh;
`;

export const Table = styled.table`
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-collapse: separate;
  border-spacing: 5px;
`;

export const THead = styled.thead`
  padding: 5px 0;
  display: block;
  background: #f8f4f4;
  font-size: 10px;
`;

export const TBody = styled.tbody`
  overflow-y: scroll;
  flex: 1;
  display: block;
`;

export const IPhoneButton = styled.button`
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
  &:first-child {
    border-right: 1px solid #999999;;
  }



  &:active {
    background-color: #0052b3;
    box-shadow: none;
  }
`;

export const TR = styled.tr`
  width: 100%;
  display: flex;
`;

export const TRHead = styled.tr`
  width: 100%;
  display: flex;
  font-size: 20px;
  padding: 8px 0;
  font-family: Telex;
`;

export const TD = styled.td`
  display: block;
  flex: 1;
    // ${({isRound}) => isRound && 'border-radius: 50%;'}
    //border-radius: ${({isToday}) => isToday ? '50%' : '0%'};
`;

export const TDD = styled.td`
  display: block;
  flex: 1;
    // ${({isRound}) => isRound && 'border-radius: 50%;'}
  //max-width: 40px;
  //border-radius: ;
  //padding: 0 15px;
  margin: 0 30px ;
  border-radius: ${({isToday}) => isToday ? '50%' : '0%'};
  background: ${({isToday}) => isToday ? 'red' : '#f8f4f4'};
  color: ${({isToday}) => isToday ? 'white' : 'black'};
  &:first-of-type { 
    //margin-right: 10px;
  }

  @media (max-width: 740px) {
    margin: 0;
  }
`;

export const TH = styled.th`
  display: block;
  flex: 1;
`;

export const FlexWidthsTD = styled(TD)`
  flex: 3;
`;

export const FlexWidthsTH = styled(TH)`
  flex: 2;
`;

export const TableScroll = styled(Table)`
  ${TableWrapper} & {
    overflow-y: auto;
  }

  ${Table}.flex-table-aligned ${THead} > ${TR} {
    overflow-y: scroll;
  }

  ${Table}.flex-widths ${FlexWidthsTD}, ${Table}.flex-widths ${FlexWidthsTH} {
    flex: 2;
  }
`;
export const Calendar = styled.div`
  max-width: 740px;
  margin: auto;
`
export const CalendarTitle = styled.h2`
  font-size: 24px;
  font-family: Almarai, serif;
  font-weight: 300;
  margin: auto 0;
`
export const ButtonArrow = styled.button`
  background: #f8f4f4;

  color: red;
  border: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`
export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-content: center;
  height: 60px;
  background: white;
  padding: 15px;
`

export const AddEventButton = styled.button`
  background: white;
  color: red;
  border: none;
  font-size: 34px;

  &:hover {
    cursor: pointer;
  }`

export const TableHead = styled.thead`
  background: #f8f4f4;
`

export const TableHeader = styled.thead`
  font-size: 10px;
  font-family: Roboto;
  font-weight: 400;
`

export const SpanMonthTitle = styled.span`
  font-family: Telex;
  font-size: 14px`

