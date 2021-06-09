import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Video
        controlsList='nodownload nofullscreen noremoteplayback'
        controls
        autoPlay
        loop
        playsInline
        disablePictureInPicture
        preload='auto' >
        <source src='https://res.cloudinary.com/scall/video/upload/v1619971036/sCallProfiles/Jose%20Rosha/jrosha_cover_qogazg.mp4' type='video/mp4' />
      </Video>
    </HeaderContainer>
  );
};

export default Header;


const HeaderContainer = styled.header`

`;

const Video = styled.video`
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;

`;