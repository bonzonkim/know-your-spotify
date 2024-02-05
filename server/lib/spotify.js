const axios = require('axios');
const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  REDIRECT_URI,
  SPOTIFY_TOKEN_ENDPOINT,
  SPOTIFY_USER_DATA_ENDPOINT,
  SPOTIFY_TOP_TRACK_ENDPOINT,
  SPOTIFY_TOP_GENRE_ENDPOINT
} = require('../config');

/**
 * /callback 에서 호출 토큰 발급 후 토큰 반환
 * @param {string} code SearchParams code에 담긴 값
 * @returns {JSON} 액세스토큰, 리프레쉬토큰, 만료시간 반환
 */
async function getSpotifyTokens(code) {
  const searchParams = new URLSearchParams();
  searchParams.append('grant_type', 'authorization_code');
  searchParams.append('redirect_uri', REDIRECT_URI);
  searchParams.append('code', code);

  const basicToken = new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64');

  try {
    const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, searchParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basicToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}

/**
 * 실제 데이터 요청할 수 있는 액세스토큰 만료 시, 리프레쉬토큰으로 재발급
 * @param {string} refreshToken 쿠키에 저장되어있는 리프레쉬토큰
 * @returns {string} 리프레쉬토큰으로 토큰 재발급후 액세스 토큰 반환
 */
async function getSpotifyAccessTokenByRefreshToken(refreshToken) {
  const searchParams = new URLSearchParams();
  searchParams.append('grant_type', 'refresh_token');
  searchParams.append('refresh_token', refreshToken);
  searchParams.append('client_id', SPOTIFY_CLIENT_ID);
  const basicToken = new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64');

  try {
    const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, searchParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basicToken}`
      }
    });

    return response.data.access_token;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function getUsersProfile(accessToken) {
  try {
    const response = await axios.get(SPOTIFY_USER_DATA_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
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
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function getTopArtistData(accessToken) {
  try {
    const response = await axios.get(SPOTIFY_TOP_GENRE_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
}

module.exports = {
  getSpotifyTokens,
  getSpotifyAccessTokenByRefreshToken,
  getUsersProfile,
  getTopTrackData,
  getTopArtistData
};
