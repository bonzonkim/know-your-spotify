import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TrackList from './components/TrackList';
import Main from './components/Main';
import Layout from './components/layout/Layout';
import ContentsContainer from "./components/layout/ContentsContainer";

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
    <Layout>

      <ContentsContainer>
        {!token && ( // token이 false일 때
            <Main/>
        )}

        {token && ( // token이 true일 때
            <>
                <h3>{userData}'s Top Track for last 6 months</h3>
                <TrackList topTrackData={topTrackData} />
            </>
        )}
      </ContentsContainer>
    </Layout>
);
}

export default App;
