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
import Loading from './components/Loading';

function App() {
  const [token, setToken] = useState(false); // 토큰 상태값
  const [isLoading, setIsLoading] = useState(true); // 현재 로딩중인지 나타내는 상태값
  const [topTrackData, setTopTrackData] = useState([]); // 유저의 많이들은 노래 데이터
  const [topArtistData, setTopArtistData] = useState([]); //  유저의 많이들은 가수 데이터
  const [userData, setUserData] = useState(''); // 유저의 이름 데이터
  // 메인페이지 로딩 시 쿠키에 저장된 토큰 값을 확인하고 토큰 유무에 따라 이후 행동 결정
  useEffect(() => {
    function fetchToken() {
      try {
        setTimeout(async () => {
          // 로딩 컴포넌트를 위해 3초 딜레이
          // cookie에 저장돼있는 토큰값을 확인하고 데이터 받아옴
          const response = await axios.get('http://localhost:9000/api/token', {
            withCredentials: true
          });
          if (response.data && response.data.userData && response.data.topTrackData && response.data.topArtistData) {
            // 응답에 에러메세지가 있어도 조건은 참이 되기 때문에 실제 데이터 유무를 확인 후 상태값 변경
            setToken(true);
            setUserData(response.data.userData.display_name);
            setTopTrackData(response.data.topTrackData.items);
            setTopArtistData(response.data.topArtistData.items);
          }
          setIsLoading(false);
        }, 3000);
      } catch (err) {
        console.error('Error fetching token :', err);
      }
    }
    fetchToken();
  }, []);

  // isLoading의 값이 true일 경우 로딩 컴포넌트 렌더링
  if (isLoading) {
    return (
      <Layout>
        <ContentsContainer>
          <Loading />
        </ContentsContainer>
      </Layout>
    );
  }

  // isLoading의 값이 false일 경우 token값에 따라 로그인 컴포넌트와 유저 스포티파이 데이터 렌더링
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
