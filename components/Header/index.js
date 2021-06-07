import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Video controls muted autoplay loop >
        <source src='./video.mp4' type='video/mp4' />
      </Video>
      <h1>Coming Soon</h1>
    </HeaderContainer>
  );
};

export default Header;


const HeaderContainer = styled.header`
min-height: 100vh;
position: relative;
display: grid;
place-items: center;
`;

const Video = styled.video`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;