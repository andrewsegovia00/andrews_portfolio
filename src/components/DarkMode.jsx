import '../style/darkMode.css'

function DarkMode({toggleMode}) {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="../src/assets/videos/dark.mp4" type="video/mp4" />
        </video>
        <div className="color-mask"></div>
      </div>
      <div className="dark-mode-text d-inline-flex p-2 justify-content-center" >
        <div onClick={ toggleMode }>
          Dark Mode
          </div>
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='../src/assets/images/blueDot.png' onClick={ toggleMode }/>
        <img className="transitionIcons mr-3" src='../src/assets/images/whiteDot.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/images/blueDot.png'/>
      </div>
      <div className='d-flex p-2 justify-content-around flex-row align-items-center align-self-center mainContainer' id='topContainer'>
          <div className="d-inline-flex p-2" id="left">
              <div className="profilePicture"></div>
          </div>
          <div className="d-inline-flex p-2" id="left">
            <div className='mainText'>
              <div className='text-white'>
                <h1 className='mb-4'>Hi I'm <span>Andrew</span></h1>
                <p className='mt-4'>Junior Software Engineer</p>
                <p className='mt-3'>Based in Southern California</p>
                <p className='mt-3'>I enjoy traveling and learning languages</p>
              </div>
              <div className="d-inline-flex mt-4">
                <a href="mailto:andrew.segovia4@gmail.com"><img className="mainIcons mr-3" src='../src/assets/icons/emailGrey.png'/></a>
                <a href="https://github.com/andrewsegovia00" target="_blank" rel="noreferrer"><img className="mainIcons mr-3" src='../src/assets/icons/gitHubGrey.png'/></a>
                <a href="https://www.linkedin.com/in/andrewsegovia-dev/" target="_blank" rel="noreferrer"><img className="mainIcons mr-3" src='../src/assets/icons/linkedinGrey.png'/></a>
                <a href=""><img className="mainIcons mr-3" src='../src/assets/icons/resumeButtonGrey.png'/></a>
              </div>
            </div>
          </div>
      </div>
      <div className='backdrop'></div>
    </>
  )
}
export default DarkMode