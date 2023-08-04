import React, { useState } from 'react';
import LightPortfolio from '../../components/LightPortfolio';
import DarkPortfolio from '../../components/DarkPortfolio';
import PixelPortfolio from '../../components/PixelPortfolio';

function Projects({ isLightMode, isPixelMode, isDarkMode, toggleDarkMode, togglePixelMode, toggleLightMode  }) {
  return (
    <>
        <div>
        {isLightMode && !isPixelMode && !isDarkMode && <LightPortfolio toggleDarkMode={toggleDarkMode} togglePixelMode={togglePixelMode} />}
        {!isLightMode && !isPixelMode && isDarkMode &&  <DarkPortfolio  togglePixelMode={togglePixelMode} toggleLightMode={toggleLightMode}/>}
        {!isLightMode && isPixelMode && !isDarkMode && <PixelPortfolio toggleLightMode={toggleLightMode} toggleDarkMode={toggleDarkMode}/>}
        </div>
    </>
  );
}

export default Projects;
