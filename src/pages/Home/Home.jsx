import React, { useState } from 'react';
// import Light from './Light';
// import Dark from './Dark';
import LightMode from '../../components/LightMode';
import DarkMode from '../../components/DarkMode';
// import LightPortfolio from './components/LightPortfolio';
// import DarkPortfolio from './components/DarkPortfolio';

function Home() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
    console.log('it works')
  };

  return (
    <div>
      {isLightMode ? <LightMode toggleMode={toggleMode} /> : <DarkMode toggleMode={toggleMode} />}
    </div>
  );
}

export default Home;
