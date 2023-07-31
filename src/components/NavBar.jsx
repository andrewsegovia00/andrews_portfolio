import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='navbar '>
        <div className="left">
        <span className="closingTag">{'</>'}</span>
          Andrew Segovia
          </div>
        <div className="right">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a href="#">About Me</a>
        </div>
      </nav>
  </>
  )
}

export default NavBar