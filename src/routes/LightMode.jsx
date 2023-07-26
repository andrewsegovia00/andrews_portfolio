import '../style/lightMode.css'

function App() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </head>
      <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="../src/assets/light.mp4" id="video" type="video/mp4" />
      </video>
          <div className="color-mask"></div>
      </div>
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
      <div className="dark-mode-text d-inline-flex p-2 justify-content-center">
          Light Mode
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='../src/assets/blueDot.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/blackDot.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/blackDot.png'/>
      </div>
      <div className='d-flex p-2 justify-content-around flex-row align-items-center align-self-center mainContainer' id='topContainer'>
          <div className="d-inline-flex p-2" id="left">
              <div className="profilePicture"></div>
          </div>
          <div className="d-inline-flex p-2" id="left">
            <div className='mainText'>
              <div>
                <h1 className='mb-4'>Hi I'm <span>Andrew</span></h1>
                <p className='mt-4'>Junior Software Engineer</p>
                <p className='mt-3'>Based in Southern California</p>
                <p className='mt-3'>I enjoy traveling and learning languages</p>
              </div>
              <div className="d-inline-flex mt-4">
                <a href="mailto:andrew.segovia4@gmail.com"><img className="mainIcons mr-3" src='../src/assets/email.png'/></a>
                <a href="https://github.com/andrewsegovia00" target="_blank" rel="noreferrer"><img className="mainIcons mr-3" src='../src/assets/gitHub.png'/></a>
                <a href="https://www.linkedin.com/in/andrewsegovia-dev/" target="_blank" rel="noreferrer"><img className="mainIcons mr-3" src='../src/assets/linkedin.png'/></a>
                <a href=""><img className="mainIcons mr-3" src='../src/assets/resumeButton.png'/></a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
