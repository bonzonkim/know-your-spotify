import React from 'react';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  padding-top: 5rem;
  display: flex;
  justify-content: center;

  > h3 {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <h3 onClick={() => window.open('https://github.com/bonzonkim/spotify-ranking-app')}>Code</h3>
    </FooterStyle>
  );
};

export default Footer;
