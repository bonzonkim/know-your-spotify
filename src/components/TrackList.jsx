function TrackList({ topTrackData }) {
  return (
  <div>
      {topTrackData.map((track, index) => (
      <div key={index}>
          <h3>{track.album.name}</h3>
          <h3>{track.album.artists[0].name}</h3>
          <img src={track.album.images[1].url} alt={'artist image'}/>
        </div>
      ))}
    </div>
  )
}

export default TrackList;
