import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import LoginButton from '../LoginButton';

const HeaderStyle = styled.header`
  display: grid;
  place-items: center;
  /*background-color: rgb(99,215,106); 진초록 */
  //background-color: rgb(242,253,245);
  background-color: rgb(152, 255, 152);
  //background-color: rgb(101, 212, 110);
  grid-template-columns: 2.8fr 0.2fr;
  place-items: center;

  > h2 {
    padding-left: 130px;
  }
`;

const Header = () => {
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:9000/api/logout', { withCredentials: true });
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <HeaderStyle>
      <h2>Know your Spotify</h2>
      <LoginButton onClick={handleLogout} text={'Logout'} icon={'logout'} />
    </HeaderStyle>
  );
};

export default Header;
