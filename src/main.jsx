import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FigeroaFotography from './FigeroaFotography.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FigeroaFotography />
    </BrowserRouter>
  </StrictMode>,
)
