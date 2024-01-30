const axios = require('axios');
const { SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET, 
  REDIRECT_URI,
  SPOTIFY_TOKEN_ENDPOINT,
  SPOTIFY_USER_DATA_ENDPOINT,
  SPOTIFY_TOP_TRACK_ENDPOINT
}= require('../config');


async function getSpotifyRefreshToken(code) {
  const searchParams = new URLSearchParams();
  searchParams.append('grant_type', 'authorization_code');
  searchParams.append('redirect_uri', REDIRECT_URI);
  searchParams.append('code', code);

 const basicToken = new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'); 

  try {
   const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, searchParams, {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicToken}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function getSpotifyAccessTokenByRefreshToken(refreshToken) {
  const searchParams = new URLSearchParams();
  searchParams.append('grant_type', 'refresh_token');
  searchParams.append('refresh_token', refreshToken);
  searchParams.append('client_id', SPOTIFY_CLIENT_ID);

  try {
    const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, searchParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencode',
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

async function getUsersProfile(accessToken) {
  try {
     const response = await axios.get(SPOTIFY_USER_DATA_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}


async function getTopTrackData(accessToken) {
  try {
     const response = await axios.get(SPOTIFY_TOP_TRACK_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}






module.exports = {
  getSpotifyRefreshToken,
  getSpotifyAccessTokenByRefreshToken,
  getUsersProfile,
  getTopTrackData,
};
