import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkButtonDiv } from './styles/Link';

const ClickedStyle = {
  color: 'black', // Inherit the text color
  textDecoration: 'none', // Remove underline
  background: '#00da5a',
  padding: '8px 20px',
  borderRadius: '15px'
};

const unClickedStyle = {
  color: 'black', // Inherit the text color
  textDecoration: 'none', // Remove underline
  padding: '8px 20px',
  borderRadius: '15px'
};

const LinkButton = () => {
  const [isTrack, setIsTrack] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/artist') {
      setIsTrack(false);
    } else {
      setIsTrack(true);
    }
  }, [location.pathname]);
  return (
    <LinkButtonDiv>
      <Link to="/track" style={isTrack ? ClickedStyle : unClickedStyle}>
        Top Track
      </Link>
      <Link to="/artist" style={!isTrack ? ClickedStyle : unClickedStyle}>
        Top Artist
      </Link>
    </LinkButtonDiv>
  );
};
export default LinkButton;
