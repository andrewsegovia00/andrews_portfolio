import React, { useState } from 'react';
import LightAboutMe from '../../components/LightAboutMe';
import DarkAboutMe from '../../components/DarkAboutMe';
import PixelAboutMe from '../../components/PixelAboutMe';

function About({ isLightMode, isPixelMode, isDarkMode, toggleDarkMode, togglePixelMode, toggleLightMode }) {
  return (
    <>
      <div>
        {isLightMode && !isPixelMode && !isDarkMode && <LightAboutMe toggleDarkMode={toggleDarkMode} togglePixelMode={togglePixelMode} />}
        {!isLightMode && !isPixelMode && isDarkMode && <DarkAboutMe togglePixelMode={togglePixelMode} toggleLightMode={toggleLightMode}/>}
        {!isLightMode && isPixelMode && !isDarkMode &&<PixelAboutMe toggleLightMode={toggleLightMode} toggleDarkMode={toggleDarkMode}/>}
      </div>
    </>
  );
}

export default About;
