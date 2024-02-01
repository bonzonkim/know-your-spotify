import styled from '@emotion/styled';
import LoginButton from "./LoginButton";

const LoginDivStyle = styled.div`
  background-color: rgb(190, 252, 192);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem;
  padding: 5rem;
  border-radius: 15px;
`

const Login = () => {
  return (
    <LoginDivStyle>
        <h3>Know your Spotify Top Track List from 6months</h3>
        <h5>Continue to login with Spotify</h5>
        <p>By logging in, We gain access to read your:</p>
        <p>Spotify user-top-read, user-read-email</p>
        <LoginButton onClick={() => window.location.href='/api/login'}/>
    </LoginDivStyle>
  )
}

export default Login;
