import '../style/darkMode.css'

function DarkMode() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="../src/assets/dark.mp4" type="video/mp4" />
        </video>
        <div className="color-mask"></div>
      </div>
      <nav>
        <div className="left">Andrew Segovia</div>
        <div className="right">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">About Me</a>
        </div>
      </nav>
      <div className="dark-mode-text">
          Dark Mode
      </div>
    </>
  )
}
export default DarkMode