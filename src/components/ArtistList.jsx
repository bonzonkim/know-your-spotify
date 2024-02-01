import styled from "@emotion/styled";
import {IndexNumberStyle} from "./TrackList";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  
  > img {
    border-radius: 10px;
  }
`;

const ArtistList = ({ topArtistList, userData }) => {
    return (
        <ContainerDiv>
            <h3>{userData}'s Top Artist for last 6 months</h3>
            <Table>
                <thead>

                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Genres</TableCell>
                </TableRow>
                </thead>
                <tbody>
                {topArtistList.map((item, index) => (
                    <TableRow key={item.id}>
                        <IndexNumberStyle>{index+1}</IndexNumberStyle>
                        <TableCell>
                            <img src={item.images[2].url} alt={'artist'} />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            {item.genres.map((genre, i, arr) => (
                                <span key={i}>
                    {genre} {i < arr.length - 1 && ", "}
                  </span>
                            ))}
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </Table>
        </ContainerDiv>
    );
};

export default ArtistList;
