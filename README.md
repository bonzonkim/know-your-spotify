# 1. Spotify DashBoard 앱 생성
1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. `Create app` 클릭
3. `Redirect URI` 설정


# 2. Clone this Project
1. `git clone https://github.com/bonzonkim/spotify-ranking-app.git`
2. `yarn install`
3. `yarn build`


# 3. `.env` 생성
1. 생성한 앱에 `Setting` 에서 `Client_id`, `Clinet_Secret` 복사

# 4. `server/config.js` 수정
1. `.env`에서 설정한 `Client_id`, `Client_Secret`
2. 사용할 `scope`, Spotify Dashboard에서 설정한 `redirect_uri`

# 5. 실행
Project Root에서  
`yarn start`: React 실행  
`yarn dev` : Express 실행
