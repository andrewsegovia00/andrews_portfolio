import React, { useState } from 'react';
import LightMode from '../../components/LightMode';
import DarkMode from '../../components/DarkMode';
import PixelMode from '../../components/PixelMode';

// function Home({isLightMode, toggleMode }) {
//   return (
//     <>
//         <div>
//         {/* {isLightMode ? <LightMode toggleMode={ toggleMode } /> : <DarkMode toggleMode={ toggleMode } />} */}
//         <PixelMode />
//         </div>
//     </>
//   );
// }


function Home({ isLightMode, isPixelMode, toggleMode }) {
  return (
    <>
      <div>
        {isLightMode && !isPixelMode && <LightMode toggleMode={toggleMode} />}
        {!isLightMode && !isPixelMode && <DarkMode toggleMode={toggleMode} />}
        {isPixelMode && <PixelMode toggleMode={toggleMode} />}
      </div>
    </>
  );
}

export default Home;
