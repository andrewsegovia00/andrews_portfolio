import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import LightMode from './components/LightMode';
// import DarkMode from './components/DarkMode';
// import LightPortfolio from './components/LightPortfolio';
// import DarkPortfolio from './components/DarkPortfolio';

// import Nav from './components/NavBar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
    {/* // <BrowserRouter> */}
      {/* <Route exact path="/" component={LightMode} />
      <Route path="/dark" component={DarkMode} />
      <Route path="/light-portfolio" component={LightPortfolio} />
      <Route path="/dark-portfolio" component={DarkPortfolio} /> */}
      {/* <Nav /> */}
      <Home/>
    </>
    // </BrowserRouter>
  );
};

export default App;


