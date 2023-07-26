function NavBar() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </head>
      <nav className='navbar '>
        <div className="left">
        <span className="closingTag">{'</>'}</span>
          Andrew Segovia
          </div>
        <div className="right">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">About Me</a>
        </div>
      </nav>
  </>
  )
}

export default NavBar