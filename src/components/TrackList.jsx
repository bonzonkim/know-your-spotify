import './TrackList.css';
function openTrack (url) {
  window.location.href = url;
}

function TrackList({ topTrackData}) {
  return (
  <table>
      <thead>
        <tr   className='head'>
          <th>album</th>
          <th>Track</th>
          <th>album</th>
        </tr>
      </thead>
    {topTrackData.map((track, index) => (
      <tbody key={track.id}>
        <tr key={index}>
            <td>
                <img key={track.album.images[1].url} src={track.album.images[2].url} alt={'album'} />
                <p key={track.album.name}>{track.album.name}</p>
            </td>
            <td>
              <span key={track.name}>{track.name}</span>
            </td>
            <td>
              {track.album.artists.map((artist, index, arr) => ( // 아티스트 이름 배열에서 마지막인지 확인하고 사이에 , 붙여줌
                <span key={artist.name}>{artist.name} {index < arr.length -1 && ', '}</span>))} 
            </td>
        </tr>
      </tbody>
    ))}
  </table>
  )
}

export default TrackList;
