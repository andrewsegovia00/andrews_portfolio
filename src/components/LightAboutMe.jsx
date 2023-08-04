import '../style/lightAboutMode.css'

function LightAboutMe({toggleDarkMode, togglePixelMode}) {
  return (
    <>
      <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="../src/assets/videos/light.mp4" id="video" type="video/mp4" />
      </video>
          <div className="color-mask"></div>
      </div>
      <div className="dark-mode-text d-inline-flex p-2 justify-content-center" >
        <div onClick={toggleDarkMode}>
          Light Mode
          </div>
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='../src/assets/images/blueDot.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/images/blackDot.png' onClick={toggleDarkMode}/>
        <img className="transitionIcons mr-3" src='../src/assets/images/blackDot.png'onClick={togglePixelMode}/>
      </div>
      <div className='text-center'>
      <h1>About Me</h1>
      </div>
        <div className="terminal "></div>
      </>
  )
}

export default LightAboutMe