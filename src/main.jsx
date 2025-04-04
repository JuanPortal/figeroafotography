import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FigueroaFotography from './FigueroaFotography.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FigueroaFotography />
    </BrowserRouter>
  </StrictMode>,
)
