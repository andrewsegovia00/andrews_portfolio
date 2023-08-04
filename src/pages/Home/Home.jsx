import React, { useState } from 'react';
import LightMode from '../../components/LightMode';
import DarkMode from '../../components/DarkMode';
import PixelMode from '../../components/PixelMode';

function Home({ isLightMode, isPixelMode, isDarkMode, toggleDarkMode, togglePixelMode, toggleLightMode }) {
  return (
    <>
      <div>
        {isLightMode && !isPixelMode && !isDarkMode && <LightMode toggleDarkMode={toggleDarkMode} togglePixelMode={togglePixelMode} />}
        {!isLightMode && !isPixelMode && isDarkMode && <DarkMode togglePixelMode={togglePixelMode} toggleLightMode={toggleLightMode}/>}
        {!isLightMode && isPixelMode && !isDarkMode &&<PixelMode toggleLightMode={toggleLightMode} toggleDarkMode={toggleDarkMode}/>}
      </div>
    </>
  );
}

export default Home;
