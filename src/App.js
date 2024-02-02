import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import TrackList from './components/TrackList';
import Login from './components/Login';
import Layout from './components/layout/Layout';
import ContentsContainer from './components/layout/ContentsContainer';
import ArtistList from './components/ArtistList';
import LinkButton from './components/LinkButton';

function App() {
  const [token, setToken] = useState(false);
  const [topTrackData, setTopTrackData] = useState([]);
  const [topArtistData, setTopArtistData] = useState([]);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    async function fetchToken() {
      try {
        // cookie에 저장돼있는 토큰값을 확인하고 데이터 받아옴
        const response = await axios.get('/api/token');
        if (response) {
          setToken(true);
          setUserData(response.data.userData.display_name);
          setTopTrackData(response.data.topTrackData.items);
          setTopArtistData(response.data.topArtistData.items);
        }
      } catch (err) {
        console.error('Error fetching token :', err);
      }
    }
    fetchToken();
  }, []);

  return (
    <Layout>
      <ContentsContainer>
        {!token && ( // token이 false일 때
          <Login />
        )}

        {token && ( // token이 true일 때
          <>
            <Router>
              <LinkButton />
              <Routes>
                <Route path="/track" element={<TrackList topTrackData={topTrackData} userData={userData} />} />
                <Route path="/artist" element={<ArtistList topArtistList={topArtistData} userData={userData} />} />
              </Routes>
            </Router>
          </>
        )}
      </ContentsContainer>
    </Layout>
  );
}

export default App;
