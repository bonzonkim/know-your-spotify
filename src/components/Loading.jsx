import React from 'react';
import styled from '@emotion/styled';

const Vinyl = styled.img`
  transition: transform 2s linear;
  animation-duration: 2s;
  animation-name: spinning;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  padding: 5rem;

  @keyframes spinning {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Vinyl src="/greenVinyl.png" alt="Loading" />;
};

export default Loading;
