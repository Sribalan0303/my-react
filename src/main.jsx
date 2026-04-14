import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Method1 from './taskfolder/Task1.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Method1 />
  
  </StrictMode>
)
