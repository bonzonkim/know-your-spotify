const express = require('express');
const { SPOTIFY_CLIENT_ID, SCOPE, REDIRECT_URI } = require('../config');
const {
	getSpotifyRefreshToken,
	getUsersProfile,
	getTopTrackData,
	getSpotifyAccessTokenByRefreshToken,
	getTopArtistData
} = require('../lib/spotify');

const apiRouter = express.Router();

apiRouter.get('/login', (req, res) => {
	res.redirect(
		`https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`
	);
});

apiRouter.get('/callback', async (req, res) => {
	const searchParams = new URLSearchParams(req.query);
	const code = searchParams.get('code');

	const tokenResponse = await getSpotifyRefreshToken(code);
	if (tokenResponse) {
		res.cookie('refresh_token', tokenResponse.refresh_token, {
			httpOnly: true
		});
	}
	res.redirect('http://localhost:3000/track');
});

apiRouter.get('/token', async (req, res) => {
	const refreshToken = req.cookies.refresh_token;

	const tokenResponse = await getSpotifyAccessTokenByRefreshToken(refreshToken);

	if (tokenResponse) {
		const topTrackData = await getTopTrackData(tokenResponse);
		const userData = await getUsersProfile(tokenResponse);
		const topArtistData = await getTopArtistData(tokenResponse);
		res.status(200).json({ topTrackData: topTrackData, userData: userData, topArtistData: topArtistData });
	}
});

module.exports = apiRouter;
