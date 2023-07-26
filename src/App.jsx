// import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LightMode from './routes/LightMode';
import DarkMode from './routes/DarkMode';
import LightPortfolio from './routes/LightPortfolio';
import DarkPortfolio from './routes/DarkPortfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LightMode} />
      <Route path="/dark" component={DarkMode} />
      <Route path="/light-portfolio" component={LightPortfolio} />
      <Route path="/dark-portfolio" component={DarkPortfolio} />
    </BrowserRouter>
  );
};

export default App;


