import styled from '@emotion/styled';
import { SiSpotify } from 'react-icons/si';

const LoginStyleButton = styled.button`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  background-color: #00da5a;
  color: #ffffff;
  padding: 0.5rem 1.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
  color: black;
`;

const LoginButton = ({ onClick }) => {
  return (
    <LoginStyleButton onClick={onClick}>
      <SiSpotify />
      <span>Login Spotify</span>
    </LoginStyleButton>
  );
};

export default LoginButton;
