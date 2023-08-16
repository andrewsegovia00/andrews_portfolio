import '../style/pixelAboutMode.css'

function PixelAboutMe({toggleLightMode, toggleDarkMode}) {
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
      <div className='text-center'>
      </div>
      <div className='terminal-Pixel'></div>
      </>
  )
}
export default PixelAboutMe