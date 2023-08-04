import '../style/darkAboutMode.css'

function DarkAboutMe({toggleLightMode, togglePixelMode}) {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="../src/assets/videos/dark.mp4" type="video/mp4" />
        </video>
        <div className="color-mask"></div>
      </div>
      <div className="light-mode-text d-inline-flex p-2 justify-content-center" >
        <div onClick={ togglePixelMode }>
          Dark Mode
          </div>
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='../src/assets/images/blueDot.png' onClick={ toggleLightMode }/>
        <img className="transitionIcons mr-3" src='../src/assets/images/whiteDot.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/images/blueDot.png' onClick={ togglePixelMode }/>
      </div>
      <div className='text-center'>
        <h1 id='aboutTitle-Dark'>About Me</h1>
      </div>
      <div className="terminal-Dark">
      </div>
      <div className='backdrop'></div>
      </>
  )
}
export default DarkAboutMe