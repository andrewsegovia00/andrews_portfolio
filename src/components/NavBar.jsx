import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navBar.css'

function NavBar({ isLightMode, toggleMode, togglePixelMode }) {
  // const navBarStyle = {
  //   color: isLightMode ? 'black' : 'white',
  // };
  return (
    <>
      <nav className='navbar'>
        <div className={isLightMode ? "left" : "leftDarkMode"}>
        <span className="closingTag">{'</>'}</span>
          Andrew Segovia
          </div>
        <div className={isLightMode ? "right" : "rightDarkMode"}>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a href="#">About Me</a>
            <button onClick={togglePixelMode}>Pixel Mode</button>
        </div>
      </nav>
  </>
  )
}

export default NavBar