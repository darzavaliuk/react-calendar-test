import styled from "styled-components";

export const SuggestButton = styled.button`
      border: none;
      color: #0066cc;
      font-size: 17px;
      font-weight: 600;
      padding: 12px 0px;
      background: #e6e6e7;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      width: 120px;

      &:last-child {
        border-left: 1px solid #999999;
      }

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-color: #0052b3;
        box-shadow: none;
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

export const Input = styled.input`
  margin: 30px 0 15px 0;
  padding: 0 10px;
  color: blue;
  font-size: 18px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #999999;
`;