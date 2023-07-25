import React from 'react'
import ReactDOM from 'react-dom/client'
import Light from './routes/LightMode.jsx'
// import Dark from './routes/DarkMode.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Light />
    {/* <Dark /> */}
  </React.StrictMode>,
)
