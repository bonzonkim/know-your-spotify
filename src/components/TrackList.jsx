// import './TrackList.css';
import styled from "@emotion/styled";

const TrackListStyle = styled.table`
  border-spacing: 10px;
  margin: auto;
  text-align: center;
`

const IndexNumberStyle = styled.td`
    margin-bottom: 10px;
`
const TrackList = ({ topTrackData}) => {
  return (
      <TrackListStyle>
          <table>
              <thead>
              <tr className='head'>
                  <th></th>
                  <th>album</th>
                  <th>Track</th>
                  <th>album</th>
              </tr>
              </thead>
              {topTrackData.map((track, index) => (
                  <tbody key={track.id}>
                  <tr key={index}>
                      <IndexNumberStyle className={'index-number'}>{index + 1}</IndexNumberStyle>
                      <td>
                          <img key={track.album.images[1].url} src={track.album.images[2].url} alt={'album'} />
                          <p key={track.album.name}>{track.album.name}</p>
                      </td>
                      <td>
                          <h4 key={track.name}>{track.name}</h4>
                      </td>
                      <td>
                          {track.album.artists.map((artist, index, arr) => ( // 아티스트 이름 배열에서 마지막인지 확인하고 사이에 , 붙여줌
                              <span key={artist.name}>{artist.name} {index < arr.length -1 && ', '}</span>))}
                      </td>
                  </tr>
                  </tbody>
              ))}
          </table>
      </TrackListStyle>
  )
}

export default TrackList;
