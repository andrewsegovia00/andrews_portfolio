import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home isLightMode={isLightMode} toggleMode={toggleMode} />} />
        <Route path="/portfolio" element={<Projects isLightMode={isLightMode} toggleMode={toggleMode} />} />
      </Routes>
    </Router>
  );
};

export default App;


