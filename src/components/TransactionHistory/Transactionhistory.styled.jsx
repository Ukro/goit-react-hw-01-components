import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid black;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;
  
  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color: lightgreen;
    font-weight: bold;
  }

  & td {
    background-color: lightpink;
  }

  & tr:nth-of-type(even) {
    background-color: lightgray;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightgreen;
  }
`;