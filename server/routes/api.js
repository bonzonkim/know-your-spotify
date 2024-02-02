const express = require('express');
const { SPOTIFY_CLIENT_ID, SCOPE, REDIRECT_URI } = require('../config');
const {
  getSpotifyTokens,
  getUsersProfile,
  getTopTrackData,
  getSpotifyAccessTokenByRefreshToken,
  getTopArtistData
} = require('../lib/spotify');

const apiRouter = express.Router();

apiRouter.get('/login', (_, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`
  );
});

apiRouter.get('/logout', (_, res) => {
  res.clearCookie('access_token');
  res.clearCookie('refresh_token');
  res.redirect('/');
});

apiRouter.get('/callback', async (req, res) => {
  const searchParams = new URLSearchParams(req.query);
  const code = searchParams.get('code');

  const tokenResponse = await getSpotifyTokens(code);
  console.log(tokenResponse.expires_in);
  if (tokenResponse) {
    res.cookie('access_token', tokenResponse.access_token, {
      httpOnly: true,
      maxAge: tokenResponse.expires_in * 1000, //milliseconds to second
      path: '/'
    });

    res.cookie('refresh_token', tokenResponse.refresh_token, {
      httpOnly: true,
      maxAge: tokenResponse.expires_in * 1000,
      path: '/'
    });
  }
  res.redirect('http://localhost:3000/track');
});

apiRouter.get('/token', async (req, res) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  if (accessToken) {
    // access_token 이 있을 경우 데이터 요청
    const topTrackData = await getTopTrackData(accessToken);
    const userData = await getUsersProfile(accessToken);
    const topArtistData = await getTopArtistData(accessToken);
    res.status(200).json({ topTrackData: topTrackData, userData: userData, topArtistData: topArtistData });
  } else if (refreshToken) {
    // access_token이 만료되어서 없을 경우 refresh_token으로 access_token을 다시 발급 받고 데이터 요청
    const tokenResponse = await getSpotifyAccessTokenByRefreshToken(refreshToken);
    const topTrackData = await getTopTrackData(tokenResponse);
    const userData = await getUsersProfile(tokenResponse);
    const topArtistData = await getTopArtistData(tokenResponse);
    res.cookie('access_token', tokenResponse, {
      httpOnly: true
    });
    res.status(200).json({ topTrackData: topTrackData, userData: userData, topArtistData: topArtistData });
  } else {
    res.redirect('http://localhost:3000/');
  }
});

module.exports = apiRouter;
