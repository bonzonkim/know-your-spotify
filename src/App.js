import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TrackList from './components/TrackList';
import { ListDiv } from './styles/List';

function App() {
  const [token, setToken] = useState(false);
  const [topTrackData, setTopTrackData] = useState([]);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    async function fetchToken() {
      try{
        // cookie에 저장돼있는 토큰값을 확인하고 데이터 받아옴
        const response = await axios.get('/api/token');
        if (response) {
          setToken(true);
          setUserData(response.data.userData.display_name);
          setTopTrackData(response.data.topTrackData.items);
        }
      } catch (err) {
        console.error('Error fetching token :', err);
      }
    }
    fetchToken();
  }, [])

  return (
  <div className="App">
    {token ? ( // token이 true일 때
      <ListDiv>
        <h3>{userData}'s Top Track for last 6 months</h3>
            <TrackList topTrackData={topTrackData} />
      </ListDiv>
    ) : ( // token이 false일 때
      <button onClick={() => window.location.href='/api/login'}>Login to Spotify</button>
    )}
  </div>
);
}

export default App;
