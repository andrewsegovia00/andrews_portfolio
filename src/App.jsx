import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

const App = () => {

  const [isLightMode, setIsLightMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPixelMode, setIsPixelMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(() => true);
    setIsDarkMode(false);
    setIsPixelMode(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(() => true);
    setIsLightMode(false);
    setIsPixelMode(false);
  }

  const togglePixelMode = () => {
    setIsPixelMode(() => true);
    setIsLightMode(false);
    setIsDarkMode(false);
  };

return (
  <Router>
    <Nav isLightMode={isLightMode} toggleMode={toggleLightMode} toggleDarkMode={toggleDarkMode} togglePixelMode={togglePixelMode}  />
    <Routes>
      <Route
        path="/"
        element={<Home isLightMode={isLightMode} isPixelMode={isPixelMode} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLightMode={toggleLightMode} togglePixelMode={togglePixelMode}/>}
      />
      <Route
        path="/portfolio"
        element={<Projects isLightMode={isLightMode} isPixelMode={isPixelMode} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLightMode={toggleLightMode} togglePixelMode={togglePixelMode}/>}
      />
    </Routes>
  </Router>
);
};

export default App;