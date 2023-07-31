import React, { useState } from 'react';
import LightMode from '../../components/LightMode';
import DarkMode from '../../components/DarkMode';

function Home({isLightMode, toggleMode }) {
  return (
    <>
        <div>
        {isLightMode ? <LightMode toggleMode={ toggleMode } /> : <DarkMode toggleMode={ toggleMode } />}
        </div>
    </>
  );
}

export default Home;
