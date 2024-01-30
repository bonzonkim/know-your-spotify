function TrackList({ topTrackData }) {
  return (
  <div>
      {topTrackData.map((track, index) => (
      <div key={index}>
          <img src={track.album.images[1].url} alt={'artist image'}/>
          <h3>{track.album.name}</h3>
          {track.album.artists.map(artist => ( <p>{artist.name}</p> )) }
        </div>
      ))}
    </div>
  )
}

export default TrackList;
