import '../style/pixelMode.css'

function PixelMode({toggleMode}) {
  return (
    <>
      {/* <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="../src/assets/videos/dark.mp4" type="video/mp4" />
        </video>
        <div className="color-mask"></div>
      </div> */}
      <div className='seomthing'></div>
      <div className="light-mode-text d-inline-flex p-2 justify-content-center" >
        <div onClick={ toggleMode }>
          Pixel Mode
          </div>
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='../src/assets/images/blackHeart.png' onClick={ toggleMode }/>
        <img className="transitionIcons mr-3" src='../src/assets/images/blackHeart.png'/>
        <img className="transitionIcons mr-3" src='../src/assets/images/redHeart.png'/>
      </div>
      
      <div className='d-flex p-2 justify-content-around flex-row align-items-center align-self-center mainContainer' id='topContainer'>
          <div className="d-inline-flex p-2" id="left">
              <div className="profilePicture"></div>
          </div>
          <div className="d-inline-flex p-2" id="left">
                <img className='blue' src="../src/assets/images/pixelIntro.png" />
          </div>
      </div>
      {/* <div className='backdrop'></div> */}
    </>
  )
}
export default PixelMode