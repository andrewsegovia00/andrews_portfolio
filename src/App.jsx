import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Nav from './components/NavBar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
    {/* // <BrowserRouter> */}
      {/* <Nav /> */}
      <Home/>
    </>
    // </BrowserRouter>
  );
};

export default App;


