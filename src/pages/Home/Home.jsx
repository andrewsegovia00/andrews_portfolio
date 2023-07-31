import React, { useState } from 'react';
import LightMode from '../../components/LightMode';
import DarkMode from '../../components/DarkMode';
// import LightPortfolio from './components/LightPortfolio';
// import DarkPortfolio from './components/DarkPortfolio';

function Home() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <>
        <div>
        {isLightMode ? <LightMode toggleMode={ toggleMode } /> : <DarkMode toggleMode={ toggleMode } />}
        </div>
    </>
  );
}

export default Home;
