import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/open-sans"; // Defaults to weight 400.
import '@fontsource/dm-mono';
import '@fontsource/rajdhani';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
