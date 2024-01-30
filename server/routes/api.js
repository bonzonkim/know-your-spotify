const express = require('express');
const { SPOTIFY_CLIENT_ID, SCOPE, REDIRECT_URI } = require('../config');
const { getSpotifyRefreshToken, getUsersProfile, getTopTrackData} = require('../lib/spotify');

const apiRouter = express.Router();


apiRouter.get('/login', (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`);
});

apiRouter.get('/callback', async (req, res) => {
  const searchParams = new URLSearchParams(req.query);
  const code = searchParams.get('code');

  const tokenResponse = await getSpotifyRefreshToken(code);
  if (tokenResponse) {
    res.cookie('refresh_token', tokenResponse.refresh_token, {
      httpOnly: true
    })
    const testResponse = await getTopTrackData(tokenResponse.access_token);
    console.log(testResponse)
    const testResponse2 = await getUsersProfile(tokenResponse.access_token);
    console.log(testResponse2)
  }
  res.redirect('http://localhost:3000');
});


apiRouter.get('/refresh-token', (req, res) => {
  res.status(200).json({ok: true});
});

module.exports = apiRouter;
