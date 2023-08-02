import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

const App = () => {
  // const [isLightMode, setIsLightMode] = useState(true);

  // const toggleMode = () => {
  //   setIsLightMode((prevMode) => !prevMode);
  // };
  const [isLightMode, setIsLightMode] = useState(true);
  const [isPixelMode, setIsPixelMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
    setIsPixelMode(false);
  };

  const togglePixelMode = () => {
    setIsPixelMode((prevMode) => !prevMode);
    setIsLightMode(false);
  };

//   return (
//     <Router>
//       <Nav isLightMode={isLightMode} toggleMode={toggleMode}/>
//       <Routes>
//         <Route path="/" element={<Home isLightMode={isLightMode} toggleMode={toggleMode} />} />
//         <Route path="/portfolio" element={<Projects isLightMode={isLightMode} toggleMode={toggleMode} />} />
//       </Routes>
//     </Router>
//   );
// };
return (
  <Router>
    <Nav isLightMode={isLightMode} toggleMode={toggleMode} togglePixelMode={togglePixelMode} />
    <Routes>
      <Route
        path="/"
        element={<Home isLightMode={isLightMode} isPixelMode={isPixelMode} toggleMode={toggleMode} />}
      />
      <Route
        path="/portfolio"
        element={<Projects isLightMode={isLightMode} isPixelMode={isPixelMode} toggleMode={toggleMode} />}
      />
    </Routes>
  </Router>
);
};

export default App;