import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  display: grid;
  place-items: center;
  /*background-color: rgb(99,215,106); 진초록 */ 
  //background-color: rgb(242,253,245);
 background-color: rgb(152, 255, 152);
  
  > p {
    cursor: pointer;
  }
`


const Header = () => {
  return (
    <HeaderStyle>
      <h2 onClick={() => window.location.href='/'}>Know your Spotify</h2>
      <span onClick={() => window.open('https://github.com/bonzonkim/spotify-ranking-app')}>Code</span>
    </HeaderStyle>
  )
}

export default Header
