import { ContainerDiv, Table, TableRow, TableCell, IndexNumberStyle } from "./styles/List";

const TrackList = ({ topTrackData, userData }) => {
  return (
      <ContainerDiv>
          <h3>{userData}'s Top Track for last 6 months</h3>
          <Table>
              <thead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Album</TableCell>
                    <TableCell>Track</TableCell>
                    <TableCell>Artist</TableCell>
                </TableRow>
              </thead>
                  <tbody>
                        {topTrackData.map((track, index) => (
                          <TableRow key={index}>
                              <IndexNumberStyle className={'index-number'}>{index + 1}</IndexNumberStyle>
                              <TableCell>
                                  <img key={track.album.images[1].url} src={track.album.images[1].url} alt={'album'} />
                              </TableCell>
                              <TableCell>
                                  <h4 key={track.name}>{track.name}</h4>
                              </TableCell>
                              <TableCell>
                                  {track.album.artists.map((artist, index, arr) => ( // 아티스트 이름 배열에서 마지막인지 확인하고 사이에 , 붙여줌
                                    <span key={artist.name}>{artist.name} {index < arr.length -1 && ', '}</span>))}
                              </TableCell>
                          </TableRow>
                        ))}
                  </tbody>
          </Table>
      </ContainerDiv>
  );
};

export default TrackList;
