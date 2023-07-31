import React, { useState } from 'react';
import LightPortfolio from '../../components/LightPortfolio';
import DarkPortfolio from '../../components/DarkPortfolio';

function Projects({ isLightMode, toggleMode }) {
  return (
    <>
        <div>
        {isLightMode ? <LightPortfolio toggleMode={toggleMode} /> : <DarkPortfolio toggleMode={toggleMode} />}
        </div>
    </>
  );
}

export default Projects;
