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
position: absolute;
width: 100%;
height: 100vh;
overflow: hidden;
`;

const Video = styled.video`
object-fit: cover;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
}
@media only screen and (max-width: 425px){
max-height:242px;
}
`;