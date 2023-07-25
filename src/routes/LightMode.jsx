import '../style/lightMode.css'

function App() {
  return (
    <>
      <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="../src/assets/light.mp4" id="video" type="video/mp4" />
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
          Light Mode
      </div>
    </>
  )
}

export default App

// function App() {

//   return(
//   <>
//   <div className="video-container">
//   <video autoPlay loop muted playsInline>
//     <source src="../src/assets/light.mp4" id="video" type="video/mp4" />
//   </video>
//       <div className="color-mask"></div>
//   </div>
//   <nav>
//       <div className="left">Andrew Segovia</div>
//       <div className="right">
//           <a href="#">Home</a>
//           <a href="#">Portfolio</a>
//           <a href="#">About Me</a>
//       </div>
//   </nav>
//   <div className="dark-mode-text">
//       Light Mode
//   </div>
//   </>
//   )
// }
// export default App