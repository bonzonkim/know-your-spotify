const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SCOPE = 'user-top-read+user-read-email';
const REDIRECT_URI = 'http://localhost:9000/api/callback'
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_USER_DATA_ENDPOINT = 'https://api.spotify.com/v1/me';
const SPOTIFY_TOP_TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const SPOTIFY_TOP_GENRE_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';

module.exports = {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SCOPE,
  REDIRECT_URI,
  SPOTIFY_TOKEN_ENDPOINT,
  SPOTIFY_USER_DATA_ENDPOINT,
  SPOTIFY_TOP_TRACK_ENDPOINT,
  SPOTIFY_TOP_GENRE_ENDPOINT
};
