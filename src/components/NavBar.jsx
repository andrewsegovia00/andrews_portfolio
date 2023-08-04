import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navBar.css'

function NavBar({ isLightMode, isDarkMode, togglePixelMode }) {
  return (
    <>
      <nav className='navbar'>
        <a id="logoLink" href="/">
        <div className={isLightMode ? "left" : "leftDarkMode"}>
        <span className="closingTag">{'</>'}</span>
          Andrew Segovia
          </div>
          </a>
        <div className={isLightMode ? "right" : "rightDarkMode"}>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a href="/about">About Me</a>
        </div>
      </nav>
  </>
  )
}

export default NavBar