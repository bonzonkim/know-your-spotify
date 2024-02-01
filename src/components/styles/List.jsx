import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px;
  
  > img {
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }
`;
export const IndexNumberStyle = styled.td`
    margin-bottom: 10px;
`
