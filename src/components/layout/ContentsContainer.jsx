import React from 'react';
import styled from '@emotion/styled';

const ContentsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContentsContainer = props => {
  return <ContentsContainerStyle>{props.children}</ContentsContainerStyle>;
};

export default ContentsContainer;
