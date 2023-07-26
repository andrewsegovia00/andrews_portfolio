// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import Light from './routes/LightMode.jsx'
// // import Dark from './routes/DarkMode.jsx'
// // import LightPortfolio from './routes/LightPortfolio.jsx'
// import DarkPortfolio from './routes/DarkPortfolio.jsx'
// // import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Light /> */}
//     {/* <Dark /> */}
//     {/* <LightPortfolio /> */}
//     <DarkPortfolio />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
