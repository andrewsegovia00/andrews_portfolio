import '../style/pixelMode.css'

function PixelMode({toggleLightMode, toggleDarkMode}) {
  return (
    <>
      <div className='seomthing'></div>
      <div className="light-mode-text d-inline-flex p-2 justify-content-center" >
        <div onClick={ toggleLightMode }>
          Pixel Mode
          </div>
      </div>
      <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='/assets/images/blackHeart.png' onClick={ toggleLightMode }/>
        <img className="transitionIcons mr-3" src='/assets/images/blackHeart.png' onClick={ toggleDarkMode }/>
        <img className="transitionIcons mr-3" src='/assets/images/redHeart.png'/>
      </div>
      
      <div className='d-flex p-2 justify-content-around flex-row align-items-center align-self-center mainContainer' id='topContainer'>
          <div className="d-inline-flex p-2" id="left">
              <div className="profilePicture"></div>
          </div>
          <div className="d-inline-flex p-2" id="left">
                <img className='blue' src="/assets/images/pixelIntro.png" />
          </div>
      </div>
      <div className='pixelBackdrop'></div>
    </>
  )
}
export default PixelMode